import React, {useEffect, useState, useContext} from "react";

import Style from "../styles/uploadNFT.module.css";
import {UploadNFT} from "../UploadNFT";

const uploadNFT = () => {
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>

        <div className={Style.uploadNFT_box_title}>
          <h2>Image, Video, Audio, or 3D Model</h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBP, MP3, WAV, OGG,
            GLB. Max size: 100 MB
          </p>
        </div>

        <div className={Style.uploadNFT_box_form}>
          <UploadNFT />
        </div>
      </div>
    </div>
  );
};

export default uploadNFT;
