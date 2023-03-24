import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [size, setSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilterProducts(products.slice(0, 10));
        const count = data.length;
        setPageCount(Math.ceil(count / size));
      });
  }, [size]);

  const handleProducts = (number) => {
    setCurrentPage(number);
    setFilterProducts(
      products.slice((currentPage - 1) * size, currentPage * size)
    );
  };

  return (
    <>
      <div className="products">
        {filterProducts.map((product) => (
          <div key={product.id} className="product">
            <p>{product.id}</p>
            <p>{product.gender}</p>
            <h2>{product.name}</h2>
            <p>{product.email}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            key={number}
            onClick={() => handleProducts(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
        
        <select onChange={(event) => setSize(event.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </>
  );
}

export default Products;
