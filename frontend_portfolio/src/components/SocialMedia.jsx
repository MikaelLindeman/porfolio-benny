import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          style={{ display: "flex" }}
          href="https://www.instagram.com/benjamin.kalaja/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          style={{ display: "flex" }}
          href="https://www.facebook.com/benjamin.kalaja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
