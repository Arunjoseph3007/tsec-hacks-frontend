import Navbar from "@/components/Navbar";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "@/libs/axios";
import EditProfileModal from "@/components/EditProfileModal";
import Link from "next/link";
import RoomCard from "@/components/RoomCard";
function Userid() {
  const [users, setUsers] = useState(true);
  const { query } = useRouter();
  const [rooms, setRooms] = useState([]);
  const userid = query.userId || "";
  const getUser = async () => {
    try {
      console.log(userid);
      const res = await axios.get(`/accounts/MyUser/${userid}/`);
      res.data.Data["interests"] = res.data.Interests;
      setUsers(res.data.Data);
    } catch (error) {
      console.log(error);
    }
  };
  const getRooms = async () => {
    try {
      const res = await axios.get(
        `/main/interested-users/?user_id=${query.userId}`
      );
      console.log(res.data);
      setRooms(
        res.data.map((room) => ({
          imgUrl: room.image1,
          desc: room.extra_details,
          city: room.city,
          locality: room.locality,
          price: room.rent_cost,
          rating: room.rating,
          roomid: room.id,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
    getRooms();
  }, [userid]);
  console.log(users.first_name);
  return (
    <>
      <Navbar />
      <div className="md:h-screen flex flex-col">
        <div className="bg-base-200 flex flex-1 flex-col md:flex-row">
          {/* //? SIDE-BAR */}
          <div className="md:w-[30%] bg-white  pb-5">
            {/* //@ User details */}
            <div className="avatar flex justify-center mt-[2rem]">
              <div className="w-[15rem] rounded-full overflow-hidden shadow-xl border border-base-300 ">
                <img
                  className="overflow-hidden opacity-90 "
                  src={process.env.NEXT_PUBLIC_API + users.profile_pic}
                />
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <div className="flex justify-center text-4xl font-serif">
                {users.first_name} {users.last_name}
              </div>
              <div className="flex justify-center text-xl font-sans">
                {users.username}
              </div>
              <div className="flex justify-center text-xl font-sans">
                {users.email}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-3 gap-5 mt-5">
                {users?.interests?.map((interest) => (
                  <div
                    className="badge badge-lg badge-primary rounded-full"
                    id={`${interest}`}
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
            {/* //@ Edit profile btn */}
            {localStorage.getItem("id") === query.userId && (
              <>
                <div className="flex justify-center mt-[2rem]">
                  <label
                    htmlFor="my-modal"
                    className="btn btn-outline btn-sm md:btn-wide"
                  >
                    Edit Profile
                  </label>
                </div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                  {users.first_name ? (
                    <EditProfileModal
                      firstName={users.first_name}
                      lastName={users.last_name}
                      photoUrl={process.env.NEXT_PUBLIC_API + users.profile_pic}
                      interests={users.interests}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </>
            )}
            {users.is_verified || localStorage.getItem("id") != query.userId ? (
              ""
            ) : (
              <div className="flex justify-center mt-[2rem]">
                <Link href={`/verifyUser/`}>
                  <button htmlFor="verify" className="btn btn-dark btn-sm ">
                    Verify
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center w-full mt-10 ">
                <h3 className="font-serif text-2xl underline ">Interested Posts</h3>
              <div className="grid grid-cols-2  gap-10 mt-10">
                {rooms.map((room) => (
                  <div className="flex justify-center items-center">
                    <RoomCard
                      imgUrl={room.imgUrl}
                      desc={room.desc}
                      city={room.city}
                      locality={room.locality}
                      price={room.price}
                      rating={room.rating}
                      roomid={room.roomid}
                      />
                  </div>
                ))}
              </div>
                
          </div>
        </div>
      </div>
    </>
  );
}

export default Userid;
