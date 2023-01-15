import React, {useState, useEffect, useContext} from "react";
import Image from "next/image";

import Style from "./Error.module.css";
import images from "../../img";

const Error = () => {
  return (
    <div className={Style.Error} onClick={() => {}}>
      <div className={Style.Error_box}>
        <div className={Style.Error_box_info}>
          <Image
            alt="error"
            src={images.errorgif}
            width={200}
            height={200}
            objectFit="cover"
            className={Style.Error_box_info_img}
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
            optio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
