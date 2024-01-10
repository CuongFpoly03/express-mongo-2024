/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  // eslint-disable-next-line no-undef
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4000/api/login`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("id", JSON.stringify(data?.id));
        sessionStorage("token", JSON.stringify(data?.token).replace(/"/g, ""));
        navigate("/");
      })
      .catch((err) => {
        console.error("login error", err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="font-bold text-3xl m-3">Login</h2>
        <div className="ml-30">
          <label className="float-left ml-34 p-2 font-bold" htmlFor="username">
            Username:
          </label>{" "}
          <br></br>
          <input
            className="border-2 border-solid border-black rounded p-1"
            placeholder="username"
            type="text"
            name="username"
            value={data.username}
            onChange={handleInput}
          />
        </div>
        <div>
          <label className="float-left ml-34 p-2 font-bold" htmlFor="password">
            Password:
          </label>
          <br></br>
          <input
            placeholder="pass"
            className="border-2 border-solid border-black rounded p-1"
            type="password"
            name="password"
            value={data.password}
            onChange={handleInput}
          />
        </div>
        <div>
          <button
            className="border-2 border-solid border-black m-6"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <div>
          <Link className="text-red-800" to={"./quenmk.jsx"}>
            Quên mật khẩu?
          </Link>
          <Link to={"/resgister.jsx"}>Đăng ký tài khoản</Link>
        </div>
        <button className="border-2 border-solid border-red p-1 text-white bg-red-800 m-5 float-right">
          <Link to={"/"}>Thoát</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
