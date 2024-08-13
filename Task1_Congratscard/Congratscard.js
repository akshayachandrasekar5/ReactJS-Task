import React from 'react';
import './Congratscardmodule.css';
import Img from './Congratscard-Images/congratscard-profile.png';
import Img1 from './Congratscard-Images/congratscard-watch.jpeg';
const Congratscard=()=>{
    return(
        <>
        <center>
            <div className="Bg">
            <h1>Congratulations</h1>
            <div className="Container">
            <img src={Img}/>
            <h1>Kiran V</h1>
            <p>Vishnu Institute of Computer Education and Technology,<br></br>Bhimavaram</p>
            <img src={Img1}/>
            </div>
            </div>
        </center>
        </>
    )
}
export default Congratscard;






