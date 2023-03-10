import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "@/libs/axios";

function EditProfileModal({firstName,lastName,photoUrl,interests}) {
    console.log(firstName,lastName,photoUrl,interests)
const [user,setUser]=useState({firstName:firstName,lastName:lastName,photoUrl:photoUrl,interests:interests.join(',')})
  const [userDetails, setUserDetails] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    interests:user.interests
  });
  const [imageDetails, setImageDetails] = useState({
    image: user.photoUrl,
    imageFile: null,
  });

  //$ Change handler
  const handleChange = (e) =>
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  //$ Submit handler
  const handleSubmit = async (e) => {
    try {
      const formdata = new FormData();
      formdata.append("first_name", userDetails.firstName);
      formdata.append("last_name", userDetails.lastName);
      if (imageDetails.imageFile) {
        formdata.append("profile_pic", imageDetails.imageFile, "img.jpg");
      }
      formdata.append("interests", userDetails.interests);
      const res = await axios.patch(
        `/accounts/MyUser/${localStorage.getItem("id")}/`,
        formdata
      );
      setUser({
        ...user,
        photoUrl: imageDetails.image,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        interests: userDetails.interests,
      });
      location.reload()
      toast.success("Profile Edited!");
    } catch (error) {
      e.preventDefault();
      toast.error("Error Occured");
    }
  };

  // ? Handles Image to URL
  function uploadImage() {
    let file = document.getElementById("fileInput").files[0];
    if (file)
      setImageDetails({ image: URL.createObjectURL(file), imageFile: file });
  }

  // & UI
  return (
    <div className="modal-box">
      <label
        htmlFor="my-modal"
        className="btn btn-sm rounded-full h-10 w-10 absolute top-5 right-5 rotate-45"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </label>
      <h3 className="font-bold text-lg">Your Profile</h3>
      <div>
        {/*//@ Form Page */}
        <div>
          <form className="bg-white sm:max-w-full max-w-md rounded overflow-hidden shadow-lg">
            <div className="form-control">
              <div className="text-center p-6  border-b">
                <img
                  className="h-24 w-24 rounded-full mx-auto"
                  src={imageDetails.image}
                  alt={user.username}
                />

                <label
                  htmlFor="fileInput"
                  type="button"
                  className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium mt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      stroke="none"
                    ></rect>
                    <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                  Browse Photo
                </label>
                <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">
                  Click to update profile picture
                </div>
                <input
                  name="photo"
                  id="fileInput"
                  accept="image/*"
                  className="hidden"
                  type="file"
                  onChange={uploadImage}
                />
              </div>
              <div className="flex flex-row justify-evenly">
                <div>
                  <label
                    htmlFor="firstname"
                    className="font-bold mb-1 text-gray-700 block"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="first-name"
                    name="firstName"
                    onChange={handleChange}
                    className="input input-bordered"
                    style={{ width: "9.5rem" }}
                    value={userDetails.firstName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="font-bold mb-1 text-gray-700 block"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="last-name"
                    className="input input-bordered"
                    style={{ width: "9.5rem" }}
                    name="lastName"
                    onChange={handleChange}
                    value={userDetails.lastName}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-evenly mt-3">
                <div>
                  <label
                    htmlFor="interests"
                    className="font-bold mb-1 text-gray-700 block"
                  >
                    Interest
                  </label>
                  <input
                    type="text"
                    placeholder="interest"
                    className="input input-bordered w-[22rem]"
                    name="interests"
                    onChange={handleChange}
                    value={userDetails.interests}
                  />
                  </div>
                </div>
              <div className="modal-action flex justify-center">
                <label
                  htmlFor="my-modal"
                  className="btn btn-sm md:btn-wide mb-2"
                  onClick={handleSubmit}
                >
                  Edit details
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfileModal;
