import React,{useEffect, useState, useContext} from 'react';
import "./HeroPage.css";


function HeroPage({id, currentHeroPageActive, setCurrentHeroPageActive}) {

    

    const [heroData,setHeroData]=useState();
    useEffect(async()=>{
        console.log(id);
        const url=`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`;
        const response = await fetch(url);
        const data = await response.json();
        setHeroData(data);
        console.log(heroData);
    },[])

    return (
        <div className="hero-page">

          <div className={currentHeroPageActive?"hero-page-info active":"hero-page-info"}>
            <div className="hero-page-info-header">
              <h1>Name</h1>
              <button className="close-button"><img src="images/close.png"></img></button>
            </div>

            
            
            
            <form className="contact-form-info" action="https://formsubmit.co/yesterbabesvintage@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false"/>
              <input className="form-item contact-name" type="text" id="name" name="name" placeholder="Name" required/>
              <input className="form-item contact-email" type="email" id="email" name="email" placeholder="Email Address" required/>
              <textarea className="form-item contact-message" id="message" name="message" cols="40" rows="5" placeholder="Message" required></textarea>
              <div className="contact-form-footer">
                <button className="send-button" type="button">SEND</button>
                <label className="contact-error-message"></label>
              </div>
            </form> 

          </div>

          <div className={currentHeroPageActive?"overlay active":"overlay"}></div>
        </div>
    )
}

export default HeroPage
