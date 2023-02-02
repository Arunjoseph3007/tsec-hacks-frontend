import React from "react"

import { team } from "../data/Data"


const Post = () => {


  return (
    <>
<div class="flex justify-center">
      <div class="flex " style={{height:'70%',width:'50%'}}>
        <div class="flex-1">
          <div class="bg-white shadow mr-8">
            <div class="px-6 py-6 pb-0 border-green">
            
              <img src="/1.jpg"  class="rounded-full h-32 w-56 mx-auto block mb-3 -mt-6 shadow-md"/>
              <div class="text-center text-xl mb-2">Brandi</div>
              <div class="text-center text-grey-dark mb-6">21 <span class="text-grey-light px-1">&bullet;</span> Whittier, California</div>
              <div class="text-center mb-6 flex flex-wrap justify-center">
                <span class="border-2 border-grey-light px-4 py-2 rounded-full text-sm text-grey-darker mr-1 mb-1">3 miles away</span>
                <span class="border-2 border-grey-light px-4 py-2 rounded-full text-sm text-grey-darker mr-1 mb-1">5* reviews</span>
              </div>
              <div class="border-1 border-grey-light mb-4 mx-8">

              </div>
              <div class="text-grey-darker mb-4">
                 Happy February everyone!:D Im a pretty simple lady. I enjoy meeting with well respected people who give off good vibes. 
              </div>
              <div class="border border-grey-light mb-2 mx-8">

              </div>
            </div>
            <div className="bg-blue">
            <a href="#" className="text-center block font-semibold uppercase  hover:text-white no-underline text-grey-darkest py-4">
               View Profile
            </a>
            </div>
          </div>
        </div>
        
    </div>
    </div>

    
    
  </>
  )
}

export default Post