import React from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFax, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { FaFax,AiFillPhone,BsEnvelopeFill } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import "./footer.css";

const Container = styled.div`
  margin:1rem;
`
function Footer() {
  return <footer>
    <Container className="footer_container">
        <div className="footer_about_section">
          <h4>About</h4>
          <ul>
            <li><Link to="/" className="footer_about_link">About Humanity</Link></li>
            <li><Link to="/" className="footer_about_link">About Our Members</Link></li>
            <li><Link to="/" className="footer_about_link">About Donation</Link></li>
            <li><Link to="/" className="footer_about_link">International Relation</Link></li>
          </ul>
        </div>
        <div className="footer_Links">
          <h4>Links</h4>
          <ul>
            <li><Link to="/" className="footer_link">Login</Link></li>
            <li><Link to="/" className="footer_link">Sign Up</Link></li>
          </ul>
          <div className="footer_medias">
            <div className="connect">Connect with us.</div> 
            <div className="footer_media">
            <Link to="/"><img src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png" alt="facebook"/></Link>
            <Link to="/"><img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png" alt="twiter"/></Link>
            <Link to="/"><img src="https://img.icons8.com/ios-glyphs/30/000000/youtube-play.png" alt="youtube"/></Link>
            </div>
          </div>
        </div>
        <div className="footer_location">
          <h4>Our Location</h4> 
          <div>Our Humanity Organization  
            <span>P.O.Box:3020,janakpur,Nepal</span>
           </div>
           <div className="tel"> <FaBeer /> Tel: +977-98******70</div>
           {/* <div className="fax"> <FaFax /> Fax: +98******70</div> */}
           {/* <div className="tel"> <BsEnvelopeFill /> Email: info@humjnk.org.np</div> */}
        </div>
    </Container>
    <div className="copyright">
    <small>&copy; Copyright Sitename 2021. All Right Reserved </small>
    <small>Powered By Humanity Club</small>
    </div>
  </footer>;
}

export default Footer;
