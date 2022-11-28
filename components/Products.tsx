import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Pagination from "react-js-pagination";
import Product from './Product';

const Products = ({
  columnsPerRow,
  searchText,
  sortBy,
  order,
  productList,
  brands,
  selectedBrands,
  setSelectedBrands,
  bannerProduct,
  setBannerProduct
}) => {

  const [currentProducts, setCurrentProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [productCountPerPage, setProductCountPerPage] = useState(8);

  useEffect(() => {
    const indexOfLastPost = activePage * productCountPerPage;
    const indexOfFirstPost = indexOfLastPost - productCountPerPage;
    const allProducts = [...productList];

    const currentProducts = allProducts.slice(indexOfFirstPost, indexOfLastPost);

    setCurrentProducts(currentProducts);
  }, [activePage, productCountPerPage, productList]);

  useEffect(() => {
    const checkedBrands = Object.keys(brands).filter(item => brands[item] === true);
    setSelectedBrands([...checkedBrands]);
  }, [brands]);


  return <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className={`grid grid-cols-${columnsPerRow} 
        gap-y-10 gap-x-6 
        sm:grid-cols-2 
        sm:gap-x-3 
        lg:grid-cols-${columnsPerRow} 
        xl:grid-cols-${columnsPerRow} 
        xl:gap-x-8`}>

        {currentProducts && currentProducts.
          filter(productItem => {
            const text = searchText && searchText.length && searchText.toLowerCase().trim();
            if (!text.length) return true;

            return productItem.title.toLowerCase().includes(text);
          })
          .filter(productItem => {
            if (!selectedBrands.length) return true;
            console.log("selectedBrands", selectedBrands);
            return selectedBrands.includes(productItem.brand);
          })
          .sort((prevProduct, productItem) => {
            if (order === "ASC") {
              return (prevProduct[sortBy] < productItem[sortBy]) ? 1 : (prevProduct[sortBy] > productItem[sortBy]) ? -1 : 0;
            }

            return (productItem[sortBy] < prevProduct[sortBy]) ? 1 : (productItem[sortBy] > prevProduct[sortBy]) ? -1 : 0;
          })
          .map((product) => (
            <Product
              {...product}
              key={product.brand + product.title}
              bannerProduct={bannerProduct}
              setBannerProduct={setBannerProduct}
              productList={productList}
            />
          ))}
      </div>
      <div className="w-full flex justify-around mt-20">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={productList.length}
          pageRangeDisplayed={5}
          onChange={setActivePage}
          innerClass="flex"
          itemClass="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
          activeClass="bg-blue-600 text-white"
        />
      </div>
    </div>
  </div>
}


export default Products;
