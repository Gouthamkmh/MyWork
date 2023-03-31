import "./Deststyle.css"
import { Component } from "react";
import img1 from '../images/pexels-josh-sorenson-995301.jpg';
import img2 from '../images/pexels-ian-beckley-2440013.jpg';
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
                    <img alt="" src={img1}/>
                    <img alt="" src={img2}/>
                </div>
            </div>
        </>
        )
    }
}

export default DestData