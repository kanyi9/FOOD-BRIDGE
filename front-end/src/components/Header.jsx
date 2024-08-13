import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="flex justify-center items-center px-16 w-full bg-yellow-800 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between max-w-full w-[1199px] max-md:flex-wrap">
        <div className="flex gap-5 justify-between pr-6 my-auto text-lg text-white">
          <div className="flex gap-2 py-1 items-center">
            <FontAwesomeIcon icon={faPhoneAlt} className="shrink-0 text-white" />
            <div>+254 7123456789</div>
          </div>
          <div className="flex gap-2 py-0.5 whitespace-nowrap items-center">
            <FontAwesomeIcon icon={faEnvelope} className="shrink-0 text-white" />
            <a href="mailto:help@foodbridge.com"><div className="flex-auto">info@foodbridge.com</div></a>
          </div>
        </div>
        <div className="flex flex-col justify-center px-10 py-3 bg-orange-300 max-md:px-5">
          <div className="flex gap-4">
            <FontAwesomeIcon icon={faFacebookF} className="shrink-0 text-white" />
            <FontAwesomeIcon icon={faXTwitter} className="shrink-0 text-white" />
            <FontAwesomeIcon icon={faInstagram} className="shrink-0 text-white" />
            <FontAwesomeIcon icon={faLinkedinIn} className="shrink-0 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
