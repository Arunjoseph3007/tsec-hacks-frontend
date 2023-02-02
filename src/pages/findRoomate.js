import Navbar from "@/components/Navbar";
import Room from "@/components/Room";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Post from "../components/Post";

export default function FindRoomate() {
  return (
    <>
      <Navbar />
      <div class="h-full">
        <Room />
        <div className="card-actions flex justify-center items-center">
          <button className="btn btn-primary btn-wide">Apply</button>
        </div>

        <h2 class=" flex justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-black-600 mt-24">
          Interested user
        </h2>
        <AwesomeSlider bullets={false}>
          <div>
            <Post />
          </div>
        </AwesomeSlider>
      </div>
    </>
  );
}
