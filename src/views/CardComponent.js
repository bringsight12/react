import React, { Component } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios"


export default class CardComponent extends Component{
  // const navigate = useNavigate()
  state ={
      menus: [],
    }

    componentDidMount() {
      axios.get("https://api.github.com/users/hadley/orgs")
      .then((res) => {
        console.log(res.data);
          this.setState({
            menus: (res.data),
          });
        })
    }
    
    render() {
      const { menus } = this.state;
    return (
    <div>
        <h1>{menus.issues_url}</h1>
    {/* <button className="shadow-indigo-500 w-full" onClick={() => navigate(props.link,{state:props})}> */}
      <div className="min-w-screen items-center justify-center">
        <div className="p-7 inline-block m-5 rounded-3xl bg-red-500 shadow-lg hover:bg-black hover:text-white">
          <div className="w-30 p-full border-hiden absolute-bottom-0 w-full">
            <div className="w-full h-44 relative">
              {/* <img className="w-80 h-44" alt="gambar" src={`${menus.avatar_url}`} /> */}
            </div>
            <p className="left-0 m-0 text-white p-2 pl-40 font-bold text-lg ">{menus.login}</p>
            {/* <p className="font-extralight text-sky-600">{props.title}</p> */}
            {/* <p className="desc w-72">{props.desc}</p> */}
            <h1>{menus.login}</h1>
          </div>
        </div>
      </div>
    {/* </button> */}
    </div>
  );
}
};
