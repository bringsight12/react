import React, { Component } from "react";

export default class count extends Component{
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    } 
    componentDidMount(){
        document.title =`kamu Mengklik ${this.state.count} times`
    }
    componentDidUpdate() {
        document.title =`kamu mengeklik ${this.state.count} times`
    }
    render() {
        return(
            <div className = "justify-center p-5 bg-blue-400"
        >
                <button onClick={() => this.setState({count:this.state.count + 1})} 
                className="p-3 bg-black text-white hover:bg-white hover:text-black " >Clik me</button>
                <p>you clik {this.state.count}</p>
            </div>
        )
     }

}