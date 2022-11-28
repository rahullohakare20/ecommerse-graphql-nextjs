import React, { useEffect } from 'react'

const FilterBrands = ({ brands, setBrands, productList }) => {

  const handleChange = (event, brand) => {
    const updatedBrands = { ...brands };
    const status = updatedBrands[brand];
    updatedBrands[brand] = !status;
    console.log("updatedBrands", updatedBrands)
    setBrands(updatedBrands);
  }

  useEffect(() => {
    const unionBrands = {};

    productList.forEach((prodItem) => {
      unionBrands[prodItem.brand] = false;
    });

    setBrands(unionBrands);
  }, [productList])

  return <div className="w-full">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
      Select Brands:
    </label>
    <div className="relative">
      {Object.keys(brands).map((brand) =>
        <div key={brand} className="flex items-center">
          <input id="link-checkbox" type="checkbox" onChange={(e) => handleChange(e, brand)} value={brands[brand]} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{brand}</label>
        </div>
      )}
    </div>
  </div >
}

export default FilterBrands;
