import React from 'react'
import './footer.css';
import vid3 from "../../Assets/vid3.mp4";
import {FiSend} from "react-icons/fi";
import {SiYourtraveldottv} from "react-icons/si";
import {FiTwitter} from "react-icons/fi";
import {FiYoutube} from "react-icons/fi";
import {FiInstagram} from "react-icons/fi";
import {SiTripadvisor}from "react-icons/si";
import {FiChevronRight} from "react-icons/fi"

const Footer = () => {
  return (
    <section className="footer ">
      <div className="videoDiv">
        <video src={vid3} loop autoPlay muted type ="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With us </h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>
              SEND <FiSend className="icon"/>
            </button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerInfo flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <SiYourtraveldottv className="icon"/> D.Travel.
              </a>
            </div>

            <div className="footerParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel, id ipsam officiis velit laborum temporibus neque. Consequatur laboriosam mollitia similique earum ab!  
            </div>        

            <div className="footerSocials flex">
              <FiTwitter className="icon"/>
              <FiInstagram className="icon"/>
              <FiYoutube className="icon"/>
              <SiTripadvisor className="icon"/>
            </div>
          </div>

          <div className="footerLinks grid">
            {/* //*-----group one */}
              <div className="linkGroup">
                <span className='groupetitle'>
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                  Service
                </li>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                  Insurance
                </li>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronRight className ="icon"/>
                   Pyments
                </li>

              </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer