import React from "react";
function RoomCard({cover='house1.jpg' ,desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam corporis possimus eaque sunt, perspiciatis nulla aliquam, fuga cum corrupti, quisquam modi voluptate aperiam sit laboriosam deleniti consequatur dolorem porro.', city='Mumbai',locality='Borivali',price=6000}) {
  return (
    <>
        <div className='box shadow'>
        <div className='img'>
            <img src={cover} alt='' />
        </div>
        <div className='text'>
            <div className='category flex'>
            <i className='fa fa-heart'></i>
            </div>
            <h4>{locality/city}</h4>
            <p>
            {desc}
            </p>
        </div>
        <div className='button flex'>
            <div>
            <button className='btn2'>{price}Rs/Month</button> 
            </div>
        </div>
        </div>
    </>
  );
}
export default RoomCard;

    // <>
    //   <div className="card card-compact w-[20rem] bg-base-100 shadow-xl border bottom-2 border-black">
    //     <figure>
    //       <img
    //         src={imgUrl}
    //         alt="Photo"
    //         className="h-[10rem] w-[20rem] mt-5"
    //       />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title">{locality}/{city}</h2>
    //       <p>{desc}</p>
    //       <div className="card-actions flex justify-center items-center">
    //         <button className="btn btn-primary btn-wide">Check Out</button>
    //       </div>
    //     </div>
    //   </div>
    // </>