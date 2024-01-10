/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import sp1 from "../assets/imgs/sp1.jpg";
import Logout from "../Components/NavAdmin";
import Timout from "../Components/timeout";
function home() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    fetch(`http://localhost:4000/api/product/index`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <Logout />
      <Nav />
      <Timout />
      <div>
        <h3 className=" m-4 w-60 m-auto mt-5 border-2 border-solid border-blue bg-blue-800 text-white p-2 font-bold">
          DANH MỤC
        </h3>
        <div className="flex">
          <p className="border-2 border-solid border-black p-2 bg-black text-white hover:bg-white rounded hover:text-black m-10 ml-80">
            Quần
          </p>
          <p className="border-2 border-solid border-black p-2 bg-black text-white hover:bg-white rounded hover:text-black m-10">
            Áo
          </p>
          <p className="border-2 border-solid border-black p-2 bg-black text-white hover:bg-white rounded hover:text-black m-10">
            Balo
          </p>
          <p className="border-2 border-solid border-black p-2 bg-black text-white hover:bg-white rounded hover:text-black m-10">
            Giày
          </p>
          <p className="border-2 border-solid border-black p-2 bg-black text-white hover:bg-white rounded hover:text-black m-10">
            Mũ
          </p>
        </div>
        <h3 className="m-4 w-60 m-auto mt-5 border-2 border-solid border-blue bg-blue-800 text-white p-2 font-bold">
          TẤT CẢ SẢN PHẨM
        </h3>
        <div className="flex ">
        {products.map((product) => {
          <div key={product._id} className="border-2 border-solid boder-black w-25% m-4 ml-16">
            <img src={sp1} alt="" />
            <p>Tên sản phẩm: {product.name}</p>
            <p>Số lượng: {product.quantity}</p>
            <span>Giá sản phẩm: {product.price} $</span>
          </div>
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default home;
