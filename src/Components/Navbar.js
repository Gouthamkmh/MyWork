import { Component } from "react";
import "./Navbarstyle.css"
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";


class Navbar extends Component{
    state = { clicked : false};
    Handle = () =>{
      this.setstate({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="Navitems">
             <h1 class="logo">Travel</h1>
             <div className="menu-icons" onClick={this.Handle}>
                  <i className={this.state.clicked ? "fas fa-xmark" : "fas fa-bars"}>   
                  </i>
             </div>
             <ul className={this.state.clicked? "menu active":"menu"}>
                    {Menuitems.map((item,index)=>{
                        return(
                            <li key={index}>
                              <Link className={item.cName} to={item.url}>
                                <i className={item.icons}>
                                </i>{item.title}
                              </Link>
                            </li>
                        );
                    })}
                <button>sign up</button>
             </ul>
            </nav>
        );
    }
}

export default Navbar;