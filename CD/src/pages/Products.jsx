/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import sp1 from "../assets/imgs/sp1.jpg";
import Footer from "../Components/Footer";
const Products = () => {
  const [product, setProduct] = useState();
  useEffect(function () {
    fetch(`http://localhost:4000/api/product/index`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product);
  return (
    <div>
      <Nav />
      <h3 className="m-4 w-60 m-auto mt-5 border-2 border-solid border-blue bg-blue-800 text-white p-2 font-bold">
        TẤT CẢ SẢN PHẨM
      </h3>
      <div className="flex flex-wrap justify-center">
      {product?.map((products) => {
        <div key={products._id} className="border-2 border-solid boder-black w-25% m-4 ml-16">
          <img src={sp1} alt="" />
          <p>Tên sản phẩm: {products.name}</p>
          <p>Số lượng: {products.quantity}</p>
          <span>Giá sản phẩm: {products.price} $</span>
        </div>
        })
      }
      </div>
      <Footer />
    </div>
  );
};

export default Products;
