import "./Deststyle.css"
import { Component } from "react";

class DestData extends Component{
    render(){
        return(
        <>
        <div className={this.props.className}>
                <div className="first-desc">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="" src="images\pexels-ian-beckley-2440013.jpg"/>
                    <img alt="" src="images\pexels-josh-sorenson-995301.jpg"/>
                </div>
            </div>
        </>
        )
    }
}

export default DestData