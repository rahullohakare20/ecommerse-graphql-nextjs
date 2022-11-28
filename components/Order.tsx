import React from 'react';

const Order = ({ order, setOrder }) => {
  const handleChange = (orderState) => {
    setOrder(orderState);
  }

  return order === "DESC" ?
    <kbd
      className="inline-flex items-center pt-0 h-12 mt-6 mr-1 px-4 py-1 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
      onClick={() => handleChange("ASC")}
    >
      <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z" /></svg>
      <span className="sr-only">Arrow key up</span>
    </kbd> :
    <kbd
      className="inline-flex items-center pt-0 h-12 mt-6 mr-1 px-4 py-1 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
      onClick={() => handleChange("DESC")}
    >
      <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" /></svg>
      <span className="sr-only">Arrow key down</span>
    </kbd>
}

export default Order;
