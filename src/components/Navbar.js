import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <h1 className="flex items-center gap-1">
          <BsFillHouseFill />
          <span>Real</span>
          <p>Estate</p>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
          <li>
            <Link href="/Findroomate">Find Roommate</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <Link href="/signup" className="btn btn-primary btn-sm">
          Sign In
        </Link>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
