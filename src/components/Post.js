import Link from "next/link"
import React from "react"

import { team } from "../data/Data"


const Post = ({post,match,setDisable}) => {

console.log(post)

const user_id=localStorage.getItem('id')
console.log(user_id)
console.log(post.user_id.user_id)

if(user_id==post.user_id.user_id){
  console.log('hi')
  setDisable(true)
}

  return (
    <>
    <h1 className="bold text-4xl flex justify-center pt-12 pb-12">{(match*100).toFixed(0)}% Matched</h1>


    <div class=" bg-gray-200 dark:bg-gray-900 flex flex-wrap items-center justify-center">
  <div class="container max-w-lg bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
    <div class="h-2/4 sm:h-64 overflow-hidden">
      <img class="w-full rounded-t"
        src={`${process.env.NEXT_PUBLIC_API}${post.user_id.profile_pic}`} 
        alt="Photo by aldi sigun on Unsplash" />
    </div>
    <div class="flex justify-start px-5 -mt-12 mb-5">
      <span clspanss="block relative h-32 w-32">
        <img alt="Photo by aldi sigun on Unsplash"
         src={`${process.env.NEXT_PUBLIC_API}${post.user_id.profile_pic}`} 
          class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
      </span>
    </div>
    <div class="">
      <div class="px-7 mb-8">
        <h2 class="text-3xl font-bold text-blue-800 dark:text-gray-300">{post.f}</h2>
        <p class="text-gray-400 mt-2 dark:text-gray-400">{post.tagz.map((tag)=><span class="border-2 border-grey-light px-4 py-2 rounded-full text-sm text-grey-darker mr-1 mb-1">{tag}</span>)}</p>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Asperiores molestiae vitae odio non commodi itaque quisquam incidunt doloribus fugit nesciunt.</p>
          <a href={`mailto:${post.user_id.email}`}>
        <div 
          class="justify-center px-4 py-2 cursor-pointer bg-blue-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-blue-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
          {post.user_id.email}
        </div>
        </a>
        
        <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
          <button
            class="text-blue-900 hover:text-blue-700 p-1 sm:p-2 inline-flex items-center dark:text-gray-400 dark:hover:text-gray-300">
            <svg class="w-7 h-7 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
          </button>
        
        
          <button
            class="text-blue-900 hover:text-blue-700 p-1 sm:p-2  inline-flex items-center dark:text-gray-400 dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
            <svg class="w-7 h-7 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055">
                </path>
              </g>
            </svg>
          </button>
          <Link href='/chatRoom'>
          <button
            class="text-blue-900 hover:text-blue-700 p-1 sm:p-2  inline-flex items-center dark:text-gray-400 dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
           
              <svg class="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>



          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    
    
  </>
  )
}

export default Post