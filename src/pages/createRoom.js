import Footer from "@/components/Footer";
import ImageInput from "@/components/ImageInput";
import Navbar from "@/components/Navbar";
import axios from "@/libs/axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function NewRoom() {
  const [roomDetails, setRoomDetails] = useState({
    extra_details: "",
    space: 0,
    rent_cost: 0,
    preferred_tags: "",
    address: "",
    locality: "",
    city: "",
    state: "",
    zipcode: "",
    panaroma_image: null,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const handleFileInput = (e) =>
    setRoomDetails((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));

  const handleChange = (e) =>
    setRoomDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/main/room-list", roomDetails);

      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-gray-200">
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="w-[60%] mx-auto my-8 shadow-md rounded-md p-5 flex flex-col gap-3 bg-white [&_*]:rounded-md [&_input]:input-md placeholder-gray-400"
      >
        <h1 className="text-2xl font-bold">Create new Room</h1>
        <hr className="border my-3" />
        <ImageInput name="panorame_image" handleFileInput={handleFileInput} />

        <div className="form-control">
          <label className="label">Description</label>
          <textarea
            onChange={handleChange}
            value={roomDetails.description}
            className="textarea textarea-bordered"
            name="extra_details"
            rows={5}
          />
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="label">Space</label>
            <input
              onChange={handleChange}
              value={roomDetails.space}
              placeholder="440"
              name="space"
              className="input input-bordered w-full"
              type="number"
            />
          </div>
          <div className="flex-1">
            <label className="label">Rent cost</label>
            <input
              onChange={handleChange}
              value={roomDetails.rent_cost}
              placeholder="500.99"
              name="rent_cost"
              className="input input-bordered w-full"
              type="number"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">Tags</label>
          <input
            onChange={handleChange}
            value={roomDetails.preferred_tags}
            placeholder="Enter tags seperated by comma"
            name="preferred_tags"
            className="input input-bordered w-full"
            type="text"
          />
        </div>
        <hr className="border my-3" />

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="label">Address</label>
            <input
              onChange={handleChange}
              value={roomDetails.address}
              placeholder="102/B, Sarvodaya Swaroop"
              name="address"
              className="input input-bordered w-full"
              type="text"
            />
          </div>
          <div className="flex-1">
            <label className="label">Locality</label>
            <input
              onChange={handleChange}
              value={roomDetails.locality}
              placeholder="Telkoswadi"
              name="locality"
              className="input input-bordered w-full"
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="label">City</label>
            <input
              onChange={handleChange}
              value={roomDetails.city}
              placeholder="Dombivli"
              name="city"
              className="input input-bordered w-full"
              type="text"
            />
          </div>
          <div className="flex-1">
            <label className="label">State</label>
            <input
              onChange={handleChange}
              value={roomDetails.state}
              placeholder="Maharsahtra"
              name="state"
              className="input input-bordered w-full"
              type="text"
            />
          </div>
          <div className="flex-1">
            <label className="label">Zipcode</label>
            <input
              onChange={handleChange}
              value={roomDetails.zipcode}
              placeholder="421202"
              name="zipcode"
              className="input input-bordered w-full"
              type="text"
            />
          </div>
        </div>

        <div className="flex gap-3 justify-between">
          <ImageInput name="image1" handleFileInput={handleFileInput} />
          <ImageInput name="image2" handleFileInput={handleFileInput} />
          <ImageInput name="image3" handleFileInput={handleFileInput} />
          <ImageInput name="image4" handleFileInput={handleFileInput} />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          create new room
        </button>
      </form>
      <Footer />
    </div>
  );
}
