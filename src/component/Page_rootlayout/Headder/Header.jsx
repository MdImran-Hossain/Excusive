import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-black py-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div></div>
            <div className="flex justify-center items-center gap-1">
              <p className="text-[14px] font-poppins font-normal text-FAFAFA ">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <a
                href="#"
                className="text-[14px] font-poppins font-semibold text-Text "
              >
                ShopNow
              </a>
            </div>
            <div>
              <select name="" id="" className="font-[14px] text-white bg-black font-poppins">
                <option value="#">English</option>
                <option value="#">Bangla</option>
                <option value="#">Arabic</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
