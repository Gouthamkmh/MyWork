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
                    <img alt="" src={this.props.img1}/>
                    <img alt="" src={this.props.img2}/>
                </div>
            </div>
        </>
        )
    }
}

export default DestData