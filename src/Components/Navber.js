import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "./Hooks/Firebase";

const Navber = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div class="navbar bg-neutral">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <Link to={"/"}>APP</Link>
                  </li>
                  <li>
                    <Link to={"/login"}>Submenu 2</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center hidden  lg:flex">
          <ul class="menu menu-horizontal gap-3 p-0">
            <li>
              <NavLink className={" btn-sm text-white"} to={"/"}>
                APP
              </NavLink>
            </li>
            {user ? (
              <li>
                <NavLink
                  onClick={() => signOut(auth)}
                  className={" btn-sm text-white"}
                  to={"/login"}
                >
                  Log Out
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink className={" btn-sm text-white"} to={"/login"}>
                  Log in
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navber;
