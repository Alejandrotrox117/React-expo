import { useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { id: Math.random().toString(), ...product },
    ]);
  };

  return { products, addProduct };
};

export default useProducts;
