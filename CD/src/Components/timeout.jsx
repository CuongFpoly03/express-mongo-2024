/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
//img
import banner from "../assets/imgs//banner.jpg";
import banner2 from "../assets/imgs/banner2.jpg";
import banner3 from "../assets/imgs/banner3.jpg";
function home() {
  const [currentImage, setCurrentImage] = useState(banner);
  const images = [banner, banner2, banner3];

  useEffect(() => {
    const imageTimeout = setTimeout(() => {
      const curentIndex = images.indexOf(currentImage);
      const nextIndex = (curentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }, 8000);
    return () => {
      clearTimeout(imageTimeout); // xoá timeout khi component ngắt kết nối (amount)
    };
  }, [currentImage, images]); // kịch hoạt useEffect khi thay đổi.
  return (
      <div>
        <img className="w-full h-80" src={currentImage} alt="" />
      </div>
  );
}

export default home;
