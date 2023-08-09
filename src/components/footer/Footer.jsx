import React from 'react';
import { FaWhatsapp} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter} from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Proff <b><span>Mohamett</span></b>Tahliil <b><span>AleX</span></b></a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Service</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://api.whatsapp.com/send?phone=252613045353" target="_blank" rel="noreferrer" ><FaWhatsapp/></a>
      
      <a href="https://github.com/ProffMohamettAlex" target="_blank" rel="noreferrer" ><FaGithub /></a>

      <a href="https://twitter.com/proffmohamett10" target="_blank" rel="noreferrer" ><FaTwitter /></a>

      <a href="https://www.facebook.com/ProffMohamettTahliil" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;  {getYear()} Proff Mohamett</small>
      </div>
    </footer>
  )
}

export default Footer
