import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { FaWhatsapp} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
            <a href="https://www.facebook.com/ProffMohamettTahliil" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      <a href="https://github.com/ProffMohamettAlex" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://api.whatsapp.com/send?phone=252613045353" target="_blank" rel="noreferrer" ><FaWhatsapp/></a>

      <a href="https://twitter.com/proffmohamett10" target="_blank" rel="noreferrer" ><FaTwitter /></a>

    </div>
  )
}

export default HeaderSocials