import "./Slidestyle.css";

const Slide = (props) => {
  return (
    <div className={props.cName}>
        <img alt='' src={props.slideImg}></img>
        <div className='content'>
         <h1>{props.title} </h1>
         <p>{props.text}</p> 
         <a href={props.url} className={props.btnclass}>
          {props.btntext}
         </a>
        </div>
    </div>
  )
}

export default Slide

