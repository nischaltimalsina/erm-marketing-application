import React from "react";
import { BsSearch } from "react-icons/bs";
import Notification from "../components/Notification";
import Message from "../components/Message";
import ProfileIcon from "../components/ProfileIcon";

const Header = () => {
  return (
    <section className="h-24 py-6 px-6 large:px-10 w-full bg-neutral-100">
      <div className="flex justify-between items-center w-full">
        <div className=" relative flex items-center h-12 w-full large:w-96 rounded-full">
          <input
            type="text"
            name="price"
            id="pribce"
            className="w-full bg-white rounded-full shadow-md h-12 px-5  outline-none text-neutral-500 outline-offset-0 focus:bg-neutral-200 active:bg-neutral-200 focus:outline-neutral-400/80 ease-in-out duration-200 "
            placeholder="Search"
          />
          <div className="absolute right-0  text-neutral-400 h-full w-16 hover:bg-neutral-400 hover:text-white ease-in-out duration-200 delay-75 rounded-full flex items-center justify-center">
            <BsSearch size={21} />
          </div>
        </div>

        <div className="hidden  large:flex gap-5 items-center text-neutral-500">
          <Message />
          <Notification />
          <ProfileIcon />
        </div>
      </div>
    </section>
  );
};

export default Header;
