import React from "react";
// import Test from '../assets/test.jpg'

export const CardComponent = (props) => {
  return (
    <button className="shadow-indigo-500 w-full">
      <div className="min-w-screen flex items-center justify-center">
        <div className="p-7 inline-block m-5 rounded-3xl bg-slate-800 shadow-lg hover:bg-black hover:text-white">
          <div className="w-30 p-full border-hiden absolute-bottom-0 w-full">
            <div className="w-full h-44 relative">
              <img className="w-80 h-44" alt="ora metu anjg" src={props.img} />
              <p className=""></p>
            </div>
            {/* <p className="left-0 m-0 text-white p-2 pl-40 font-bold text-lg ">{props.Harga}</p> */}
            <p className="font-extralight text-sky-600">{props.title}</p>
            <p className="desc w-72">{props.desc}</p>
          </div>
        </div>
      </div>
    </button>
  );
};
