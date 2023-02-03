import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import Link from "next/link";
import { useUser } from "@/context/userContext";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const user_id=useUser()
  console.log(user_id?.user?.userId)

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
            <Link href="/searchRoom">Search</Link>
          </li>
          <li>
            <Link href="/createRoom">Create Room</Link>
          </li>
          <li>
            <Link href={`/${user_id?.user?.userId}`}>Profile</Link>
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
