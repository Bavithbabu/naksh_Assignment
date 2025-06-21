import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [category, setCategory] = useState("Mobiles");
  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const filtered = allProducts.filter((product) => {
    const matchName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    // If searchTerm is not empty, ignore category and search all products
    if (searchTerm.trim() !== "") {
      return matchName;
    }
    // Otherwise, filter by category
    const matchCategory = product.category === category;
    return matchCategory;
  });


  // console chacking ->
  useEffect(() => {
  fetch("http://localhost:5000/api/products")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched products from backend:", data);
      setAllProducts(data);
    });
}, []);



  return (
    <div className="">
      <Navbar
        category={category}
        setCategory={setCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="p-8 mt-12">
        <div className="flex flex-wrap justify-center items-stretch">
          {filtered.length ? (
            filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No {category.toLowerCase()} found.</p>
          )}
        </div>
      </div>
    </div>
  );
};



export default Products;