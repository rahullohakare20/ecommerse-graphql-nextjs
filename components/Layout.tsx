import React, { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link';
import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';
import Products from './Products';
import ColumnCountSelector from './ColumnCountSelector';
import Search from './Search';
import Order from './Order';
import SortBy from './SortBy';
import FilterBrands from './FilterBrands';
import Banner from './Banner';
import BannerPosition from './BannerPosition';

const GET_PRODUCT = gql`
  query {
    Products {
      getAllProducts {
        title
        brand
        price
        imageList
      }
    }
  }
`;

const Layout = ({ title = 'This is the default title' }) => {
  const [columnsPerRow, setColumnsPerRow] = useState(4);
  const [searchText, setSearchText] = useState("");
  const [order, setOrder] = useState("DESC");
  const [sortBy, setSortBy] = useState("title");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const { data } = useQuery(GET_PRODUCT);
  const [productList, setProductList] = useState([]);
  const [brands, setBrands] = useState({});
  const [bannerProduct, setBannerProduct] = useState(productList[0]);
  const [bannerPosition, setBannerPosition] = useState("TOP");

  useEffect(() => {
    if (data && data.Products && data.Products.getAllProducts) {
      setProductList(data.Products.getAllProducts);
      setBannerProduct(data.Products.getAllProducts[0]);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.Products && data.Products.getAllProducts && !selectedBrands.length) {
      setProductList(data.Products.getAllProducts);
    }
  }, [selectedBrands]);


  return <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1 className="text-5xl font-bold text-center m-10 text-decoration-line: underline">{title}</h1>
    <div className="grid grid-cols-1 gap-1">
      {bannerPosition === "TOP" && <Banner bannerProduct={bannerProduct} />}
    </div>
    <div className="grid sm:grid-cols-1 grid-cols-5 gap-1 pl-5 pr-5">
      <aside className="col-span-1 sm: col-span-1">
        <div className="w-full">
          <BannerPosition
            bannerPosition={bannerPosition}
            setBannerPosition={setBannerPosition}
          />
        </div>
        <div className="mt-5">
          <ColumnCountSelector
            columnsPerRow={columnsPerRow}
            setColumnsPerRow={setColumnsPerRow}
          />
        </div>
        <div className="mt-5 grid grid-cols-5 gap-1">
          <div className="col-span-4 mr-1">
            <SortBy sortBy={sortBy} setSortBy={setSortBy} />
          </div>
          <div className="col-span-1 flex justify-center align-center">
            <Order setOrder={setOrder} order={order} />
          </div>
        </div>
        <div className="overflow-y-scroll h-96 mt-5 w-full">
          <FilterBrands
            productList={productList}
            brands={brands}
            setBrands={setBrands}
          />
        </div>
      </aside>
      <main className="col-span-4 mt-6 sm: col-span-1">
        <div className="grid grid-cols-3 sm:grid-cols-1 ml-5 mr-5">
          <div className="col-span-1 col-start-3 sm:col-start-1">
            <Search searchText={searchText} setSearchText={setSearchText} />
          </div>
        </div>
        <div>
          <Products
            columnsPerRow={columnsPerRow}
            searchText={searchText}
            sortBy={sortBy}
            order={order}
            productList={productList}
            brands={brands}
            setSelectedBrands={setSelectedBrands}
            selectedBrands={selectedBrands}
            bannerProduct={bannerProduct}
            setBannerProduct={setBannerProduct}

          />
        </div>
      </main>
    </div>
    <div className="grid grid-cols-1 gap-1">
      {bannerPosition === "BOTTOM" && <Banner bannerProduct={bannerProduct} />}
    </div>
  </div>
}

export default Layout
