import Navbar from "@/components/Navbar";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "@/libs/axios";
import EditProfileModal from "@/components/EditProfileModal";
function Userid() {
  const [users, setUsers] = useState(true);
  const { query } = useRouter();
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
  useEffect(() => {
    getUser();
  }, [userid]);
  console.log(localStorage.getItem("id"));
  console.log(query.userId);
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
                  <div className="badge badge-lg badge-primary rounded-full" id={`${interest}`}>
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
                  <EditProfileModal
                    firstName={users.firstName}
                    lastName={users.lastName}
                    photoUrl={process.env.NEXT_PUBLIC_API + users.profile_pic}
                    interests={users.interests}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Userid;
