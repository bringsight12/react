import React from "react";
import { useNavigate } from "react-router-dom";


export const CardComponent = (props) => {
  const navigate = useNavigate()
  return (
    <div>
    <button className="shadow-indigo-500 w-full" onClick={() => navigate(props.link,{state:props})}>
      <div className="min-w-screen items-center justify-center">
        <div className="p-7 inline-block m-5 rounded-3xl bg-slate-800 shadow-lg hover:bg-black hover:text-white">
          <div className="w-30 p-full border-hiden absolute-bottom-0 w-full">
            <div className="w-full h-44 relative">
              <img className="w-80 h-44" alt="gambar" src={props.img} />
            </div>
            <p className="left-0 m-0 text-white p-2 pl-40 font-bold text-lg ">{props.time}</p>
            <p className="font-extralight text-sky-600">{props.title}</p>
            <p className="desc w-72">{props.desc}</p>
          </div>
        </div>
      </div>
    </button>
    </div>
  );
};
