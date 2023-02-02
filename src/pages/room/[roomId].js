import Navbar from "@/components/Navbar";
import Post from "@/components/Post";
import Room from "@/components/Room";
import { useRouter } from "next/router";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";


export default function FindRoomate() {
  const router=useRouter()
  const roomid=router.query.roomId
  console.log(roomid)
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