import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import {RiSendPlaneFill} from "react-icons/ri";

import Style from "./Footer.module.css";
import images from "../../img";
import {Discover, HelpCenter} from "../Navbar";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt="logo" height={100} width={100} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            debitis quidem eligendi, a qui repudiandae.
          </p>
          <div className={Style.footer_social}>
            <a href="#" target="_blank">
              <TiSocialFacebook />
            </a>
            <a href="#" target="_blank">
              <TiSocialLinkedin />
            </a>
            <a href="#" target="_blank">
              <TiSocialTwitter />
            </a>
            <a href="#" target="_blank">
              <TiSocialYoutube />
            </a>
            <a href="#" target="_blank">
              <TiSocialInstagram />
            </a>
          </div>
        </div>
        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>
        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>
        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti, quod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
