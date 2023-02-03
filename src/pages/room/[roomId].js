import Navbar from "@/components/Navbar";
import Post from "@/components/Post";
import Room from "@/components/Room";
import { useRouter } from "next/router";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import axios from "@/libs/axios";
import { useEffect,useState } from "react";
import Link from "next/link";

export default function FindRoomate() {
  const router=useRouter()
  const roomid=router.query.roomId
  const [posts,setPosts]=useState([])
 

 const getPost=async()=>{
  try{
   console.log('hi',roomid)
    const res = await axios.get(`/main/room-detail/${roomid}`);
    console.log('this is post',res.data.Interested_Users)
    setPosts(res.data.Interested_Users)

  }catch(error){
    console.log(error)

  }
  

 }


 const user_id=localStorage.getItem('id')
    
    console.log(user_id)

    const handleClick=async(e)=>{
        try{
          const data={user_id:user_id,room_id:roomid}
            const res = await axios.post(`/main/interested-users/`,data);

        }catch(error){
            console.log(error)
        }
        
        
    }

    useEffect(()=>{
      getPost()
    },[roomid])



  return (
    <>
      <Navbar />
      <div class="h-full">
        <Room roomid={roomid} />
        <div className="card-actions flex justify-center items-center">
          <button onClick={handleClick} className="btn btn-primary btn-wide">Apply</button>
        </div>
        <Link href={`/contact/${roomid}`}>
        <div className="card-actions flex justify-center items-center">
          <button onClick={handleClick} className="btn btn-primary btn-wide">Contact LandLord</button>
        </div>
        </Link>

        <h2 class=" flex justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-black-600 mt-24">
          Interested user
        </h2>
        <AwesomeSlider bullets={false}>
        {posts?posts.map((post)=><div><Post post={post}/></div>):''}
          
        </AwesomeSlider>
      </div>
    </>
  );
}