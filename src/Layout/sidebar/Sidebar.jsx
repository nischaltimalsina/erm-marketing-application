import React from "react";

import { NavLink } from "react-router-dom";
import data, { mobileMenuData } from "./data";

const Icon = ({ Component, size }) => {
  return <Component size={size} />;
};

const Sidebar = ({ toggle, handleToggle }) => {
  return (
    <>
      <aside className="hidden large:block large:w-80 bg-neutral-50 shadow-lg py-6 px-14 z-50">
        <div>
          <h1 className=" text-3xl font-light uppercase ">Logger</h1>
        </div>
        <ul className="flex-col items-start w-full focus:outline-neutral-600  font-light space-y-3 mt-32 text-sm uppercase">
          {data.map((item, index) => (
            <li key={index} className="w-full focus:outline-neutral-600 ">
              <NavLink
                to={item.link}
                className={
                  "flex gap-4 p-2 w-full focus:outline-neutral-400  justify-start items-center"
                }
              >
                <Icon Component={item.icon} size={18} />
                <p className="mr-auto"> {item.title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
      <aside className="large:hidden fixed bottom-0 bg-neutral-50 h-14 w-full shadow-lg overflow-x-scroll">
        <ul className="flex items-center w-full focus:outline-neutral-600  font-light text-sm uppercase">
          {mobileMenuData.map((item, index) =>
            !item.children ? (
              <li key={index} className="w-full focus:outline-neutral-600 p-2 ">
                <NavLink
                  to={item.link}
                  className={
                    "flex w-full focus:outline-neutral-400  justify-start items-center py-2 px-5 "
                  }
                >
                  <Icon Component={item.icon} size={20} />
                </NavLink>
              </li>
            ) : (
              <li
                key={index}
                className="relative w-full focus:outline-neutral-600 p-2 "
              >
                <button
                  to={item.link}
                  onClick={handleToggle}
                  className={
                    "flex w-full focus:outline-neutral-400  justify-start items-center py-2 px-5 "
                  }
                >
                  <Icon Component={item.icon} size={20} />
                </button>
              </li>
            )
          )}
        </ul>
      </aside>
      {!toggle && (
        <aside className=" absolute h-[calc(100vh-3.5rem)] bottom-14 w-screen bg-neutral-100 z-50 transform scale-95 duration-300 ease-in-out p-10">
          <div className="mb-8">
            <div className="h-20 w-20 overflow-hidden rounded-full">
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="ProfilePicture"
              />
            </div>
          </div>
          <hr />
          <ul className="flex-col my-8 items-center w-full focus:outline-neutral-600  font-light text-sm uppercase">
            {mobileMenuData.map(
              (item, index) =>
                item.children &&
                item.children.map((item, index) => (
                  <li
                    key={index}
                    className="w-full focus:outline-neutral-600 p-2 "
                  >
                    <NavLink
                      to={item.link}
                      className={
                        "flex w-full focus:outline-neutral-400 gap-4 justify-start items-center py-1 "
                      }
                    >
                      <Icon Component={item.icon} size={20} />
                      {item.title}
                    </NavLink>
                  </li>
                ))
            )}
          </ul>
          <hr />
        </aside>
      )}
    </>
  );
};

export default Sidebar;
