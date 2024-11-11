"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <nav className="fixed z-50 w-full bg-white md:absolute md:bg-transparent">
      <div className="container px-6 m-auto lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-6 py-3 md:py-4 md:gap-0">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="hidden peer"
          />
          <div className="z-30 flex justify-between w-full lg:w-max md:px-0">
            <Link
              href="/"
              aria-label="logo"
              className="flex items-center space-x-2"
            >
              <span className="text-2xl font-bold text-yellow-900 ">
                Tailus <span className="text-yellow-700 ">Feedus</span>
              </span>
            </Link>

            <div className="flex items-center lg:hidden max-h-10">
              <label
                role="button"
                htmlFor="toggle_nav"
                aria-label="hamburger"
                id="hamburger"
                className="relative w-10 h-auto p-2"
              >
                <div
                  id="line"
                  className="m-auto h-0.5 w-6 rounded bg-yellow-900  transition duration-300"
                ></div>
                <div
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900  transition duration-300"
                ></div>
              </label>
            </div>
          </div>

          <label
            role="button"
            htmlFor="toggle_nav"
            className="fixed top-0 left-0 z-10 hidden w-full h-full bg-yellow-200 peer-checked:block bg-opacity-30 backdrop-blur backdrop-filter"
          ></label>
          <div className="z-30 flex-col items-center justify-end hidden w-full p-6 bg-white peer-checked:flex lg:flex lg:flex-row gap-y-6 rounded-xl lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-7/12">
            <div className="w-full text-gray-600 lg:pr-4">
              <ul className="flex flex-col w-full text-sm font-medium tracking-wide gap-y-6 lg:gap-y-0 lg:flex-row">
                <li>
                  <Link
                    href="/all-recipes"
                    className="block transition md:px-4 hover:text-yellow-700"
                  >
                    <span>All recipes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="block transition md:px-4 hover:text-yellow-700"
                  >
                    <span>Cart</span>
                  </Link>
                </li>
              </ul>
            </div>
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="flex items-center self-start justify-center w-12 h-12 text-2xl font-bold text-gray-500 rounded-full cursor-pointer lg:self-center bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300"
                >
                  {user.name.split(" ")[0][0]}
                </Link>
              </>
            ) : (
              <div className="w-full border-yellow-200 min-w-max lg:space-x-2 lg:space-y-0 sm:w-max lg:border-l ">
                <Link href="/signup">
                  <button
                    type="button"
                    title="Start buying"
                    className="w-full px-6 py-3 mb-2 text-center transition rounded-full lg:mb-0 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                  >
                    <span className="block text-sm font-semibold text-yellow-800">
                      Sign up
                    </span>
                  </button>
                </Link>
                <Link href="/login">
                  <button
                    type="button"
                    title="Start buying"
                    className="w-full px-6 py-3 text-center transition bg-yellow-300 rounded-full hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                  >
                    <span className="block text-sm font-semibold text-yellow-900">
                      Login
                    </span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
