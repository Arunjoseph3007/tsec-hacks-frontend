import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import RoomCard from "@/components/RoomCard";

export default function SearchPage(props) {
  const [searchPara, setsearchPara] = useState({ city: "", range: null, locality: "" });
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="flex flex-col justify-center items-center">
          <h1>Search Your Next Home </h1>
          <h2>Find new & featured property located in your local city.</h2>
        </div>
        <div className="container">
          <form className="flex justify-evenly text-black">
            <div className="box">
              <span>Locality</span>
              <input
                type="text"
                placeholder="Locality"
                value={searchPara.locality}
                onChange={(e) =>
                  setsearchPara({ ...searchPara, locality: e.target.value })
                }
              />
            </div>
            <div className="box">
              <span>City</span>
              <input
                type="text"
                placeholder="City"
                value={searchPara.city}
                onChange={(e) =>
                  setsearchPara({ ...searchPara, city: e.target.value })
                }
              />
            </div>
            <div className="box">
              <span>Price Range</span>
              <input
                type="text"
                placeholder="Price Range"
                value={searchPara.range}
                onChange={(e) =>
                  setsearchPara({ ...searchPara, range: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col justify-center items-center r-0">
              <button
                className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="grid grid-cols-3 items-center">
        <div className="flex justify-center items-center">
          <RoomCard/>
        </div>
        <div className="flex justify-center items-center">
          <RoomCard/>
        </div>
        <div className="flex justify-center items-center">
          <RoomCard/>
        </div>
        <div className="flex justify-center items-center">
          <RoomCard/>
        </div>
        <div className="flex justify-center items-center">
          <RoomCard/>
        </div>
      </div>
    </>
  );
}
