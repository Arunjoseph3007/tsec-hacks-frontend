import Link from "next/link"
import React from "react"

import { team } from "../data/Data"


const Post = ({post}) => {




  return (
    <>
    
<div class="flex justify-center">
      <div class="flex " style={{height:'60%',width:'50%'}}>
        <div class="flex-1">
          <div class="bg-white shadow mr-8">
            <div class="px-6 py-6 pb-0 border-green">
            
              <img src={`${process.env.NEXT_PUBLIC_API}${post.user_id.profile_pic}`}  class="rounded-full object-contain h-32 mx-auto block mb-3 -mt-6 shadow-md"/>

              <div class="text-center mb-6 flex flex-wrap justify-center">
                {post.tagz.map((tag)=><span class="border-2 border-grey-light px-4 py-2 rounded-full text-sm text-grey-darker mr-1 mb-1">{tag}</span>)}

              </div>
              <div class="border-1 border-grey-light mb-4 mx-8">

              </div>
              <div class="text-grey-darker mb-4">
                 Happy February everyone!:D Im a pretty simple lady. I enjoy meeting with well respected people who give off good vibes. 
              </div>
              <div class="border border-grey-light mb-2 mx-8">

              </div>
            </div>
            <Link href={`/${post.user_id.user_id}`}>
            <div className="flex justify-center bg-blue">
             <button className="btn btn-primary btn-wide">View Profile</button>
            </div>
            </Link>
          </div>
          
        </div>
        
        
    </div>
    </div>

    
    
  </>
  )
}

export default Post