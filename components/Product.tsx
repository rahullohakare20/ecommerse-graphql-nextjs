import React, { ReactNode, useEffect } from 'react'
import Image from 'next/image';

const Product = ({
  imageList,
  title,
  brand,
  price,
  bannerProduct,
  setBannerProduct,
  productList
}) => {

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const handleClick = () => {
    const bannerUpdated = productList && productList.find(productItem => productItem.title === title);
    setBannerProduct(bannerUpdated);
  }

  return <div className='h-100 w-100'>
    <a href="#" className="block">
      <div className='flex justify-end' onClick={handleClick}>
        {title === bannerProduct.title ? <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
        </svg>
          :
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-8 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
          </svg>}
      </div>

      <Image
        loader={myLoader}
        src={imageList[0]}
        alt="Picture of the product"
        height={500}
        width={500}
        objectFit='contain'
        className="-mt-3 h-[350px] w-full object-cover sm:h-[450px]"
      />

      <h3 className="h-8 sm:h-20 mt-4 text-sm text-gray-700">{title}</h3>

      <div className="mt-4 flex items-center justify-between font-medium sm:grid grid-cols-1">
        <p className="sm:col-span-1">{price || "Out of Stock"}</p>

        <p className="text-xs uppercase tracking-wide sm:col-span-1">{brand}</p>
      </div>
    </a>

  </div>
}


export default Product;
