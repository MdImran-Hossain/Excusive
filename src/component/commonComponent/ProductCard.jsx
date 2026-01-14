import React from "react";
import productImages from "../../assets/productImage/p1.png";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { LuEye } from "react-icons/lu";

const ProductCard = () => {
  return (
    <>
      <div className=" max-w-[270px] flex flex-col gap-4 addCart_wraaper transition-all cursor-pointer">
        <div className="pt-[35px] pb-11 px-10 bg-f5f5f5 rounded flex justify-center items-center relative  overflow-hidden">
          <img src={productImages} alt={productImages} />
          <div className="flex flex-col items-start gap-2 absolute right-3 top-3">
            <div className="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center ">
              <FaRegHeart />
            </div>
            <div className="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center ">
              <LuEye />
            </div>
          </div>
          <div className="py-1 px-3 bg-red rounded text-[12px] text-f5f5f5 font-poppins font-normal absolute top-3 left-3">
            <p>-40%</p>
          </div>
            <div className="flex justify-center items-center py-2 bg-black text-[16px] text-white font-medium font-poppins absolute bottom-[-100%] left-0 right-0 addCart transition-all">
                <p>Add To Cart</p>
            </div>

        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-poppins font-semibold text-[16px] text-black">
            HAVIT HV-G92 Gamepad
          </h3>
          <p className="flex gap-3">
            <span className="font-poppins font-medium text-[16px] text-red">
              {" "}
              $120
            </span>
            <span className="font-poppins font-medium text-[16px] text-black opacity-50 text line-through">
              $160
            </span>
          </p>

          <div className="flex items-center">
            {[...new Array(5)].map((_, Index) => {
              return(
                <span key={Index} className="text-[#FFAD33] w-5 h-5">
                <FaStar />
              </span>
              )
            })}
            <span className="font-poppins font-medium text-[14px] text-black opacity-50 pl-1">
              (88)
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
