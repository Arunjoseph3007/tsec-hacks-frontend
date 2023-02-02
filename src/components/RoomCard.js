import React from "react";
import Rating from "./Rating";

function RoomCard({
  imgUrl = "house1.jpg",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam corporis possimus eaque sunt, perspiciatis nulla aliquam, fuga cum corrupti, quisquam modi voluptate aperiam sit laboriosam deleniti consequatur dolorem porro.",
  city = "Mumbai",
  locality = "Borivali",
  price = 6000,
  rating = 3,
}) {
  return (
    <>
      <div className="card card-compact w-[20rem] bg-base-100 shadow-xl ">
        <figure>
          <img src={imgUrl} alt="Photo" className="h-[10rem] w-[20rem] mt-5" />
        </figure>
        <div className="card-body ">
          <div className="flex justify-evenly align-middle">
            <h2 className="card-title">
              {locality}, <div className="flex flex-col align-bottom text-sm">{city}</div>
            </h2>
            <div className="flex flex-col justify-center">
              <Rating rating={4}/>
            </div>
          </div>
          <p>{desc.slice(0, 100)}...</p>
          <div className="stats flex justify-center shadow">
            <div className="stat flex justify-center">
              <div className="text-gray-800 text-bold">Rent</div>
              <div className="stat-value">₹{price}</div>
            </div>
          </div>
          <div className="card-actions flex justify-center items-center">
            <button className="btn btn-primary btn-wide">Check Out</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default RoomCard;
