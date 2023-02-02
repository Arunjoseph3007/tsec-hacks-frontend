/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Pano from "./Pano";
import Rating from "./Rating";
import axios from "@/libs/axios";

const Room = ({ roomid }) => {

   
  const [room, setRoom] = useState({
    address: "",
    city: "",
    created_by: 0,
    extra_details: "",
    id: 0,
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    is_booked: false,
    locality: "",
    panaroma_image: "",
    preferred_tags: "",
    ratings: 0,
    rent_cost: 0,
    space: "",
    state: "",
    zipcode: "",
  });

  const [crime, setCrime] = useState({ fact: "", RiskDetail: "" });
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "85639aa264msh863c6bd99267cbep14bd9djsn25fccea7ee7d",
      "X-RapidAPI-Host": "crime-data-by-zipcode-api.p.rapidapi.com",
    },
  };

  const getRoom = async () => {
    try {
      const res = await axios.get(`/main/room-detail/${roomid}`);
      
      setRoom({
        address: res.data.Room.address,
        city: res.data.Room.city,
        created_by: res.data.Room.created_by,
        extra_details: res.data.Room.extra_details,
        id: res.data.Room.id,
        image1: res.data.Room.image1,
        image2: res.data.Room.image2,
        image3: res.data.Room.image3,
        image4: res.data.Room.image4,
        is_booked: res.data.Room.is_booked,
        locality: res.data.Room.locality,
        panaroma_image: res.data.Room.panaroma_image,
        preferred_tags: res.data.Preference_Tags,
        ratings: res.data.Room.ratings,
        rent_cost: res.data.Room.rent_cost,
        space: res.data.Room.space,
        state: res.data.Room.state,
        zipcode: res.data.Room.zipcode,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoom();
  }, [roomid]);

 

  const img = `${process.env.NEXT_PUBLIC_API}${room.panaroma_image}`;

  return (
    <div className="featured">
      <h2 class=" flex justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-black-600 mb-24">
        {room.address}
      </h2>

      <div className="container1">
        <Pano className="span-3 image-grid-row-2" image={img} />

        <img src={`${process.env.NEXT_PUBLIC_API}${room.image1}`} alt=""/>
        <img src={`${process.env.NEXT_PUBLIC_API}${room.image2}`} />
        <img src={`${process.env.NEXT_PUBLIC_API}${room.image3}`} />
        <img src={`${process.env.NEXT_PUBLIC_API}${room.image4}`} />
        <div className="span-3 img-details">
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Landlord:</p>
              </div>
            </div>

            <div className="info">
              <p className="bold">
                A crime occurs every 1 hour 11 minutes (on average) in 94109.
              </p>
            </div>
            <div className="info">
              <p className="bold">
                A crime occurs every 1 hour 11 minutes (on average) in 94109.
              </p>
            </div>

            <div>
              <div className="info">
                <p className="bold">preffered tags:</p>
                {room.preferred_tags ? room.preferred_tags.map((p) => <p>{p}</p>) : ""}
              </div>
            </div>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Room type:</p>
                <p>1BHK</p>
              </div>
              <div className="info">
                <Rating rating={room.ratings} />
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>{room.extra_details}</p>
        </div>
      </div>
    </div>
  );
};

export default Room;
