import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const Mainheader = ({ toggleSidebar }) => {
  const [noti, setNoti] = useState(false);
  const [msg, setMsg] = useState(false);
  const [profile, setProfile] = useState(false);

  const toggleNoti = () => {
    setNoti(!noti);
  };
  const toggleMsg = () => {
    setMsg(!msg);
  };
  const toggleProfile = () => {
    setProfile(!profile);
  };

  return (
    <div className=" flex p-4 justify-between h-[75px] w-full bg-white sticky top-0">
      {/* hidden future div  */}
      <div className="flex gap-5 md:hidden">
        <GiHamburgerMenu
          onClick={toggleSidebar}
          className="text-3xl w-[12.5rem] border-[1px] p-[0.5px] border-[#878D97]"
        />
        <img src="/logo/logo.png" alt="logo" className="w-[175px] h-[30px]" />
      </div>

      {/* search and input div  */}
      <div className="flex justify-center items-center gap-4 sm:hidden md:flex">
        <CiSearch className="text-2xl text-[#64748B] font-semibold cursor-pointer hover:text-indigo-400" />
        <input
          type="text"
          placeholder="Type to search..."
          className="w-[15rem] focus:border-none focus:outline-none"
        />
      </div>
      {/* div of right side of header  */}
      <div className="flex gap-5 justify-center items-center">
        {/* dark mode btn  */}

        <div className="bg-white">
          <button className="capitalize hover:bg-slate-400 h-8 w-16 rounded-2xl hover:text-white  cursor-pointer">
            dark
          </button>
        </div>

        {/* bell icons */}
        <div
          onClick={toggleNoti}
          className="w-10 rounded-full flex justify-center items-center h-8 bg-[#E2E8F0]"
        >
          <FaRegBell className="hover:text-indigo-500 text-lg cursor-pointer" />
        </div>

        {/* Notification toast */}
        <div
          className={`${
            noti ? "" : "hidden"
          } flex flex-col absolute top-[3.25rem] right-[13.25rem] w-80 h-72 border-[0.5px] border-[#E2E8F0] bg-white`}
        >
          {/* header  */}
          <div className="h-10 flex justify-start px-4 py-1 border-[0.5px]  border-[#E2E8F0]">
            Notification
          </div>
          {/* Notification list  */}
          <div className="overflow-y-scroll scrollbar-hidden ">
            {/* list 1 div */}
            <div className="h-25 p-2 border-[0.5px]  border-[#E2E8F0]">
              <div className="text-sm text-left">
                Edit your information in a swipe Sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim.
              </div>
              <div className="text-sm m-1 text-gray-600 text-left">
                12 May, 2025
              </div>
            </div>
            <div className="h-25 p-2 border-[0.5px]  border-[#E2E8F0]">
              <div className="text-sm text-left">
                Edit your information in a swipe Sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim.
              </div>
              <div className="text-sm m-1 text-gray-600 text-left">
                12 May, 2025
              </div>
            </div>
            <div className="h-25 p-2 border-[0.5px]  border-[#E2E8F0]">
              <div className="text-sm text-left">
                Edit your information in a swipe Sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim.
              </div>
              <div className="text-sm m-1 text-gray-600 text-left">
                12 May, 2025
              </div>
            </div>
            <div className="h-25 p-2 border-[0.5px]  border-[#E2E8F0]">
              <div className="text-sm text-left">
                Edit your information in a swipe Sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim.
              </div>
              <div className="text-sm m-1 text-gray-600 text-left">
                12 May, 2025
              </div>
            </div>
          </div>
        </div>

        {/* msg icon  */}
        <div
          onClick={toggleMsg}
          className="w-10 rounded-full flex justify-center items-center h-8 bg-[#E2E8F0]"
        >
          <MdOutlineMessage className="hover:text-indigo-500 text-lg cursor-pointer" />
        </div>

        {/* msg toast */}
        <div
          className={`${
            msg ? "" : "hidden"
          } flex flex-col absolute top-[3.25rem] right-[13.25rem] w-80 h-72 border-[0.5px] border-[#E2E8F0] bg-white`}
        >
          {/* header  */}
          <div className="h-10 flex justify-start px-4 py-1 border-[0.5px]  border-[#E2E8F0]">
            Messages
          </div>
          {/* msg list  */}
          <div className="overflow-y-scroll scrollbar-hidden ">
            {/* list 1 div */}
            <div className="h-25 flex justify-start items-center gap-4 p-2 border-[0.5px]  border-[#E2E8F0]">
              <div className="p-1">
                <img className="h-16" src="./useravatar/user2.png" alt="" />
              </div>
              <div>
                <div className="font-semibold">Mariya Desoja</div>
                <div className="text-gray-500 text-sm">
                  I like your confidence 💪
                </div>
                <div className="text-gray-500 text-sm">2min ago</div>
              </div>
            </div>
            <div className="h-25 flex justify-start items-center gap-4 p-2 border-[0.5px]  border-[#E2E8F0]">
              <div className="p-1">
                <img className="h-16" src="./useravatar/user2.png" alt="" />
              </div>
              <div>
                <div className="font-semibold">Mariya Desoja</div>
                <div className="text-gray-500 text-sm">
                  I like your confidence 💪
                </div>
                <div className="text-gray-500 text-sm">2min ago</div>
              </div>
            </div>
            <div className="h-25 flex justify-start items-center gap-4 p-2 border-[0.5px]  border-[#E2E8F0]">
              <div className="p-1">
                <img className="h-16" src="./useravatar/user2.png" alt="" />
              </div>
              <div>
                <div className="font-semibold">Mariya Desoja</div>
                <div className="text-gray-500 text-sm">
                  I like your confidence 💪
                </div>
                <div className="text-gray-500 text-sm">2min ago</div>
              </div>
            </div>
            <div className="h-25 flex justify-start items-center gap-4 p-2 border-[0.5px]  border-[#E2E8F0]">
              <div className="p-1">
                <img className="h-16" src="./useravatar/user2.png" alt="" />
              </div>
              <div>
                <div className="font-semibold">Mariya Desoja</div>
                <div className="text-gray-500 text-sm">
                  I like your confidence 💪
                </div>
                <div className="text-gray-500 text-sm">2min ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* profile div  */}
        <div
          onClick={toggleProfile}
          className="flex gap-4 cursor-pointer justify-center items-center"
        >
          {/* name div  */}
          <div className="flex flex-col sm:hidden md:block ">
            <div className="text-sm font-semibold">Thomas Anree</div>
            <div className="text-[#7b8085] text-xs ">UX Designer</div>
          </div>
          {/* image div  */}
          <div>
            <img
              className="w-[3.5rem] h-[3rem]"
              src="./useravatar/image.png"
              alt=""
            />
          </div>
          {/* down arrow div  */}
          <div>
            <IoIosArrowDown className="text-[#7b8085] text-xl" />
          </div>
        </div>

        {/* profile tost  */}
        <div
          className={`${
            profile ? "" : "hidden"
          } w-60 h-60 bg-white flex flex-col gap-3 absolute top-[4rem] right-[1rem]`}
        >
          <div className="h-40 p-5 flex flex-col  justify-start ">
            <div className="flex justify-start items-center gap-5 h-10">
              <FaRegUser className="text-2xl" />{" "}
              <div className="text-lg font-medium">My Profile</div>
            </div>
            <div className="flex justify-start items-center gap-5 h-10">
              <IoIosContact className="text-2xl" />{" "}
              <div className="text-lg font-medium">My Contacts</div>
            </div>
            <div className="flex justify-start items-center gap-5 h-10">
              <CiSettings className="text-2xl" />{" "}
              <div className="text-lg font-medium">Account Settings</div>
            </div>
          </div>
          <div className="flex p-5 h-16 justify-start items-center gap-4 border-[0.1px] border-gray-600">
            <CiLogout className="text-2xl" />
            <div className="text-lg font-medium">Log Out</div>
          </div>
        </div>
      </div>
      {/* end of main div  */}
    </div>
  );
};

export default Mainheader;
