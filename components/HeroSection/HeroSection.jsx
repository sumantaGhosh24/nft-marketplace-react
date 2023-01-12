import React from "react";
import Image from "next/image";

import Style from "./HeroSection.module.css";
import {Button} from "../";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect and sell NFTs 🖼</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            temporibus.
          </p>
          <Button btnName="Get Started" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero Section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
