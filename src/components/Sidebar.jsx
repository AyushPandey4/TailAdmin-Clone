import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { SiGoogleforms } from "react-icons/si";
import { TbTableSpark } from "react-icons/tb";
import { MdOutlineContactPage } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { CiInboxIn } from "react-icons/ci";
import { TbFileInvoice } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { SiFusionauth } from "react-icons/si";
import { RiArrowUpSLine } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Analytics from "./Analytics";

const Sidebar = ({ toggleSidebar }) => {
  const [visibility, setVisibility] = useState({
    dashboard: false,
    task: false,
    form: false,
    table: false,
    pages: false,
    chart: false,
    ui: false,
    auth: false,
  });

  const toggleVisibility = (option) => {
    setVisibility((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
 
    <div className="bg-[#1C2434] min-h-screen w-72 ">
      {/* logo div */}
      <div className="flex flex-start gap-3 justify-evenly bg-[#1C2434]  p-5 w-72 h-20 fixed top-0 z-10">
        <img className="w-[12.75rem]" src="/logo/logo.png" alt="logo" />
        <IoMdArrowRoundBack
          onClick={toggleSidebar}
          className="md:hidden sm:block text-4xl h-10 w-8 text-[#64748B]  "
        />
      </div>

      {/* menu div  */}
      <div className="p-3 mt-20">
        {/* menu div  */}
        <div className="text-[#8A99A3]">
          <div className="text-[#8A99A3] font-semibold h-10 p-1  ">MENU</div>
          {/* list div  */}
          <div className="flex flex-col">
            {/* dashboard */}
            <div>
              <div
                onClick={() => toggleVisibility("dashboard")}
                className="flex cursor-pointer hover:bg-[#333A48] justify-between h-10 items-center p-3 text-center text-[#DEDFE9] "
              >
                <div className="flex flex-start gap-3">
                  <MdDashboard className="text-center text-xl" />
                  <span className="capitalize font-medium text-[#DEDFE9] leading-tight text-[17px]">
                    dashboard
                  </span>
                </div>
                <div>
                  {visibility.dashboard ? (
                    <RiArrowUpSLine />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
              </div>

              {/* dash option  */}
              <div className={`p-2 ${visibility.dashboard ? "" : "hidden"}`}>
                <ul className="list-none">
                 <Link to='/'><li className="p-1 ml-8 hover:text-white cursor-pointer">
                    eCommerce
                  </li> </Link>
                  <Link to='/analytics'> <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Analytics
                  </li> </Link>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Marketing
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    CRM
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Stocks
                  </li>
                </ul>
              </div>
            </div>

            {/* calender  */}
            <div className="hover:bg-[#333A48]">
              <div className="flex justify-between h-10 items-center p-3 text-center text-[#DEDFE9] ">
                <div className="flex flex-start gap-3">
                  <SlCalender className="text-center text-xl" />
                  <span className="capitalize font-medium text-[#DEDFE9] leading-tight text-[17px]">
                    calender
                  </span>
                </div>
              </div>
            </div>

            {/* profile */}

            <div className="hover:bg-[#333A48]">
              <div className="flex justify-between h-10 items-center p-3 text-center text-[#DEDFE9] ">
                <div className="flex flex-start gap-3">
                  <FaRegUser className="text-center text-xl" />
                  <span className="capitalize font-medium text-[#DEDFE9] leading-tight text-[17px]">
                    profile
                  </span>
                </div>
              </div>
            </div>

            {/* task */}
            <div className="">
              <div
                onClick={() => toggleVisibility("task")}
                className="flex hover:bg-[#333A48] justify-between h-10 items-center p-3 text-center text-[#DEDFE9] "
              >
                <div className="flex flex-start gap-3">
                  <BsListTask className="text-center text-xl" />
                  <span className="capitalize font-medium text-[#DEDFE9] leading-tight text-[17px]">
                    tasks
                  </span>
                </div>
                <div>
                  {visibility.task ? <RiArrowUpSLine /> : <IoIosArrowDown />}
                </div>
              </div>

              {/* taks option  */}
              <div className={`p-2 ${visibility.task ? "" : "hidden"}`}>
                <ul className="list-none">
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    List
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Kanban
                  </li>
                </ul>
              </div>
            </div>

            {/* forms */}
            <div className="">
              <div
                onClick={() => toggleVisibility("form")}
                className="flex hover:bg-[#333A48] justify-between h-10 items-center p-3 text-center text-[#DEDFE9] "
              >
                <div className="flex flex-start gap-3">
                  <SiGoogleforms className="text-center text-xl" />
                  <span className="capitalize font-medium text-[#DEDFE9] leading-tight text-[17px]">
                    forms
                  </span>
                </div>
                <div>
                  {visibility.form ? <RiArrowUpSLine /> : <IoIosArrowDown />}
                </div>
              </div>

              {/* forms option  */}
              <div className={`p-2 ${visibility.form ? "" : "hidden"}`}>
                <ul className="list-none">
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Form Elements
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Pro Form Elements
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Form Layout
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Pro Form Layout
                  </li>
                </ul>
              </div>
            </div>

            {/* tables */}
            <div className="">
              <div
                onClick={() => toggleVisibility("table")}
                className="flex hover:bg-[#333A48] justify-between h-10 items-center p-3 text-center text-[#DEDFE9] "
              >
                <div className="flex flex-start gap-3">
                  <TbTableSpark className="text-center text-xl" />
                  <span className="capitalize font-medium text-[#DEDFE9] leading-tight text-[17px]">
                    tables
                  </span>
                </div>
                <div>
                  {visibility.table ? <RiArrowUpSLine /> : <IoIosArrowDown />}
                </div>
              </div>

              {/* tables option  */}
              <div className={`p-2 ${visibility.table ? "" : "hidden"}`}>
                <ul className="list-none">
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Tables
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Pro Tables
                  </li>
                </ul>
              </div>
            </div>

            {/* pages  */}
            <div className="">
              <div
                onClick={() => toggleVisibility("pages")}
                className="flex hover:bg-[#333A48] justify-between h-10 items-center p-3 text-center text-[#DEDFE9] "
              >
                <div className="flex flex-start gap-3">
                  <MdOutlineContactPage className="text-center text-xl" />
                  <span className="capitalize font-medium text-[#DEDFE9] leading-tight text-[17px]">
                    pages
                  </span>
                </div>
                <div>
                  {visibility.pages ? <RiArrowUpSLine /> : <IoIosArrowDown />}
                </div>
              </div>

              {/* pages option  */}
              <div className={`p-2 ${visibility.pages ? "" : "hidden"}`}>
                <ul className="list-none">
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Settings
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    File Manager
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Data Tables
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Pricing Tables
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Error Page
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Faq's
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Teams
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Terms & Conditions
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Mail Success
                  </li>
                </ul>
              </div>
            </div>

            {/* end  */}
          </div>
        </div>
      </div>

      {/* support div  */}
      <div className="p-3">
        {/* menu div  */}
        <div className="text-[#8A99A3]">
          <div className="text-[#8A99A3] font-semibold h-10 p-1">SUPPORT</div>
          {/* list div  */}
          <div className="flex flex-col">
            {/* messages  */}
            <div className="m-1 hover:bg-[#333A48] h-10 ">
              <div className="dash flex space-x-4 h-6 font-medium p-2 text-[#DEDFE9]">
                <FiMessageSquare className="text-center text-xl" />
                <span className="capitalize text-[#DEDFE9] text-center">
                  Messages
                </span>
              </div>
            </div>

            {/* inbox  */}
            <div className="m-1 hover:bg-[#333A48] h-10">
              <div className="dash flex space-x-4 h-6 p-2 text-[#DEDFE9]">
                <CiInboxIn className="text-center text-xl" />
                <span className="capitalize text-[#DEDFE9] text-center">
                  Inbox
                </span>
              </div>
            </div>

            {/* invoice  */}
            <div className="m-1 hover:bg-[#333A48] h-10">
              <div className="dash flex space-x-4 h-6 p-2 text-[#DEDFE9]">
                <TbFileInvoice className="text-center text-xl" />
                <span className="capitalize text-[#DEDFE9] text-center">
                  Invoice
                </span>
              </div>
            </div>

            {/* end  */}
          </div>
        </div>
      </div>

      {/* others div  */}
      <div className="p-3 ">
        {/* menu div  */}
        <div className="text-[#8A99A3]">
          <div className="text-[#8A99A3] font-semibold">OTHERS</div>
          {/* list div  */}
          <div className="flex flex-col">
            {/* chart  */}
            <div className="mt-3">
              <div
                onClick={() => toggleVisibility("chart")}
                className="flex hover:bg-[#333A48] justify-between h-10 items-center p-3 text-center text-[#DEDFE9] "
              >
                <div className="flex flex-start gap-3">
                  <FaChartPie className="text-center text-xl" />
                  <span className="capitalize font-medium text-[#DEDFE9] leading-tight text-[17px]">
                    Chart
                  </span>
                </div>
                <div>
                  {visibility.chart ? <RiArrowUpSLine /> : <IoIosArrowDown />}
                </div>
              </div>

              {/* chart option  */}
              <div className={`p-2 ${visibility.chart ? "" : "hidden"}`}>
                <ul className="list-none">
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Basic Chart
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Advanced Chart
                  </li>
                </ul>
              </div>
            </div>

            {/* ui elements  */}
            <div className="mt-3">
              <div
                onClick={() => toggleVisibility("ui")}
                className="flex hover:bg-[#333A48] justify-between h-10 items-center p-3 text-center text-[#DEDFE9] "
              >
                <div className="flex flex-start gap-3">
                  <FaBuilding className="text-center text-xl" />
                  <span className="capitalize font-medium text-[#DEDFE9] leading-tight text-[17px]">
                    UI Elements
                  </span>
                </div>
                <div>
                  {visibility.ui ? <RiArrowUpSLine /> : <IoIosArrowDown />}
                </div>
              </div>

              {/* ui option  */}
              <div className={`p-2 ${visibility.ui ? "" : "hidden"}`}>
                <ul className="list-none">
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Accordion
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Alerts
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Avatars
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Badge
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Breadcrumbs
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Buttons
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Buttons Group
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Cards
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Carousel
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Dropdowns
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Images
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    List
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Modals
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Notifications
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Pagination
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Popovers
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Progress
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Spinners
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Tabs
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Tooltips
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Videos
                  </li>
                </ul>
              </div>
            </div>

            {/* authentication  */}
            <div className="mt-3 mb-0 ml-0">
              <div
                onClick={() => toggleVisibility("auth")}
                className="flex hover:bg-[#333A48] justify-between h-10 items-center p-3 text-center text-[#DEDFE9] "
              >
                <div className="flex flex-start gap-3">
                  <SiFusionauth className="text-center text-xl" />
                  <span className="capitalize font-medium text-[#DEDFE9] leading-tight text-[17px]">
                    Authentication
                  </span>
                </div>
                <div>
                  {visibility.auth ? <RiArrowUpSLine /> : <IoIosArrowDown />}
                </div>
              </div>

              {/* auth option  */}
              <div className={`p-2 ${visibility.auth ? "" : "hidden"}`}>
                <ul className="list-none">
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Sign In
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Sign Up
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Reset Password
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Coming Soon
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    2 Step Verification
                  </li>
                  <li className="p-1 ml-8 hover:text-white cursor-pointer">
                    Under Maintenance
                  </li>
                </ul>
              </div>
            </div>

            {/* end  */}
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Sidebar;
