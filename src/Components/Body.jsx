import React, { useState, useEffect } from 'react';
import "../Styles/body.css"
import { LuDot } from "react-icons/lu";
import { FaGripLines } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { GiMicrophone } from "react-icons/gi";
import { RxSlash } from "react-icons/rx";
import image from '../Assets/2b600726-2d7d-4c74-b6b2-5fa108edf370.jpeg'
import image2 from '../Assets/image2.jpeg'
import { FaSquareFull } from "react-icons/fa";
const Body = () => {

  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-04-26T00:00:00Z'); // April 26, 2024 at midnight
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };



  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });




  const [isVisible, setIsVisible] = useState({
    id: "comOne",
  });

  useEffect(() =>{
    console.log(isVisible)
  },[isVisible])

  const toggleDiv = (e) =>{
    setIsVisible({
      id:e.target.id
    })
  }
  return (
    <div>
      <div className="container">
        <div className="container_contents">
          <div className="timer">
            <ul className='countdown_timer'>
              <li>{timeLeft.days}  <span>days</span></li>
              <li className='dot'><LuDot /></li>
              <li>{timeLeft.hours}  <span>hours</span></li>
              <li className='dot'><LuDot /></li>
              <li>{timeLeft.minutes}  <span>minutes</span></li>
              <li className='dot'><LuDot /></li>
              <li>{timeLeft.seconds}  <span>seconds</span></li>
            </ul>

            <div className='aGripLines'>
              <FaGripLines />
            </div>
          </div>


          <div className="roadmap_container_contents">
            <h4>Invitation to the</h4>
            <h1> ROAD MAP OF WHY WORKSHOP </h1>

            <p>
              Join us at the ROADMAP OF WHY workshop to embark on a transformative journey of
              self-discovery and empowerment.
            </p>
          </div>

        </div>

      </div>

      <div className="mainvent_details">

        <div className="date-time">
          <FaRegClock className="icon" />

          <RxSlash className="icon" />

          <div className="details">
            <h3>Date - Time:</h3>
            <p>April 26th - 27th 2024</p>
            <p></p>
          </div>
        </div>



        <div className="location">
          <FiMapPin className="icon" />
          <RxSlash className="icon" />

          <div className="details">
            <h3>Location:</h3>
            <p>143, Circular Road Opposite Lush Gardens Elekahia Housing Estate Port Harcourt</p>
          </div>
        </div>

        <div className="speaker">
          <GiMicrophone className="icon" />


          <RxSlash className="icon" />

          <div className="details">
            <h3>Speaker:</h3>
            <p>Dr. Mercy Bello Abu</p>
            <p></p>
          </div>
        </div>
      </div>




      <div className="program">
      <div className="aboutprogram_container">
        <div className="left_content">
        <div>
          <div className="title">
            <h3
             id='comOne'
             onClick={(e) =>{
               toggleDiv(e)
             }}
            >Engage in interactive sessions and exercises to</h3>
          </div>


         <div className={isVisible.id === "comOne" ? "comOne" : "comOne d-none"}>
         <div className= "program_content">
            <ul className='content'>
              <li> <span><FaSquareFull/></span> Discover your core values and beliefs, and define your personal mission and vision.</li>

              <li> <span><FaSquareFull/></span>Create actionable steps to align your actions with your purpose.</li>
              <li> <span><FaSquareFull/></span>Learn effective communication strategies to articulate your WHY to others.</li>
            </ul>

          </div>
         </div>
        </div>
        </div>


        <div className="right_content">
            <img className='image' src={image} alt="" />
        </div>
      </div>

      <div className="aboutprogram_container  rev_flex">
      <div className="right_content">
            <img className='image' src={image2} alt="" />
        </div>


        <div className="left_content">
        <div>
          <div className="title">
            <h3
             id='comOne'
             onClick={(e) =>{
               toggleDiv(e)
             }}
            >Who Should Attend?</h3>
          </div>


         <div className={isVisible.id === "comOne" ? "comOne" : "comOne d-none"}>
         <div className= "program_content">
            <ul className='content'>
              <li> <span><FaSquareFull/></span> - Professionals seeking clarity in their purpose and direction.</li>

              <li> <span><FaSquareFull/></span>Entrepreneurs aiming to align their actions with their core values.</li>
              <li> <span><FaSquareFull/></span>Individuals interested in personal development and growth.</li>
            </ul>

          </div>
         </div>
        </div>
        </div>
      </div>

      </div>


      <div className="price_details">
        <h2 className='register'>Register Now</h2>


        <div className='price-details-box'>
          <div className="Early_bird">
            <div className="price_name">
              <p className='name'>Early Bird</p>
              <p className='price'>₦ 50,000</p>
            </div>

            <div className='means'>
            <p >Both Offline and Online</p>
            </div>

            <button className='register_btn' >
              <a href="https://forms.gle/VJrGFSKtEQzZAWk36)**">
              Register Here!
              </a>
            </button>
          </div>

          <div className="Early_bird">
            <div className="price_name">
              <p className='name'>Regular</p>
              <p className='price'>₦ 75,000</p>
            </div>

            <div className='means'>
            <p >Both Offline and Online</p>
            </div>

            <button className='register_btn' >
              <a href="https://forms.gle/VJrGFSKtEQzZAWk36)**">
              Register Here!
              </a>
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Body