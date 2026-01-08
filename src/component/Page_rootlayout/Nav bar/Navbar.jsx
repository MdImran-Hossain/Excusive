import React, { useEffect, useRef, useState } from "react";
import { FaRegHeart, FaRegStar, FaRegUser } from "react-icons/fa";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItem = [
    {
      id: 1,
      item: "Home",
      navlinked: "/",
    },
    {
      id: 2,
      item: "Contact",
      navlinked: "/Contact",
    },
    {
      id: 3,
      item: "About",
      navlinked: "/About",
    },
    {
      id: 4,
      item: "Sign Up",
      navlinked: "/Sign-up",
    },
  ];
  const  [account, setAccount]=useState(false)
  const handleAccountRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        handleAccountRef.current &&
        !handleAccountRef.current.contains(event.target)
      ) {
        setAccount(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="pt-10 pb-4 border-b-[2px] border-b-[rgba(0,0,0,0.3)]">
        <div className="container m-auto">
          <div className="flex justify-between items-center">
            <div>
              <a
                href="#"
                className="font-bold font-Inter text-[24px] text-black"
              >
                Exclusive
              </a>
            </div>
            <div>
              <ul className="flex justify-center items-center gap-12">
                {navItem.map((nav) => (
                  <li key={nav.id}>
                    <NavLink
                      to={nav.navlinked}
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-1 border-b-[rgba(0,0,0,0.5)] font-normal font-poppins text-black text-[16px]"
                          : "font-normal font-poppins text-black text-[16px]"
                      }
                    >
                      {nav.item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="basis-1/3 flex justify-end items-center gap-x-6 cursor-pointer">
              <div className="relative ">
                <input
                  type="text"
                  className="py-[7px] pl-5 pr-3 bg-f5f5f5 w-[300px] rounded shadow font-poppins font-normal text-[16px] text-black"
                  placeholder="What are you looking for?"
                />
                <span className=" absolute top-[50%] right-3 translate-y-[-50%] text-black text-[16px]">
                  <IoSearchSharp />
                </span>
              </div>
              <div className="flex justify-end items-center gap-x-4">
                <div>
                  <span className="text-black text-2xl">
                    <FaRegHeart />
                  </span>
                </div>
                <div className=" relative w-8 h-8 flex items-center justify-center">
                  <span className="text-black text-2xl">
                    <IoCartOutline />
                  </span>
                  <div className="w-4 h-4 bg-[#DB4444] rounded-full flex justify-center items-center absolute top-0 right-0">
                    <p className="text-[12px] text-f5f5f5 font-poppins font-normal">
                      0
                    </p>
                  </div>
                </div>
                <div className="relative" ref={handleAccountRef}>
                  <div className=" w-8 h-8 flex items-center justify-center bg-red rounded-full" onClick={() => setAccount((prev) => !prev)}>
                  <span className="text-white text-l" >
                    <FaRegUser />
                  </span>
                 
                </div>
                 {account && <div className="p-5 mt-1 rounded flex flex-col items-start justify-start bg-[rgba(0,0,0,0.4)] backdrop-blur-[150px] absolute top-full w-56 right-0 gap-[13px] cursor-pointer">
                    <div className="flex justify-center items-center gap-4">
                      <span className="text-white text-2xl">
                        <FaRegUser />
                      </span>
                      <p className="text-[14px] text-f5f5f5 font-poppins font-normal">
                        Manage My Account
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <span className="text-white text-2xl">
                        <LuShoppingBag />
                      </span>
                      <p className="text-[14px] text-f5f5f5 font-poppins font-normal">
                        My Order
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <span className="text-white text-2xl">
                        <RxCrossCircled />
                      </span>
                      <p className="text-[14px] text-f5f5f5 font-poppins font-normal">
                        My Cancellations
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <span className="text-white text-2xl">
                        <FaRegStar />
                      </span>
                      <p className="text-[14px] text-f5f5f5 font-poppins font-normal">
                        My Reviews
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <span className="text-white text-2xl">
                        <TbLogout2 />
                      </span>
                      <p className="text-[14px] text-f5f5f5 font-poppins font-normal">
                        Logout
                      </p>
                    </div>
                  </div>}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
