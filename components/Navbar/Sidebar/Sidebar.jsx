import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {GrClose} from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

import Style from "./Sidebar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

const Sidebar = ({setOpenSideMenu}) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const discover = [
    {name: "Collection", link: "collection"},
    {name: "Search", link: "searchPage"},
    {name: "Author Profile", link: "author"},
    {name: "NFT Details", link: "NFT-details"},
    {name: "Account Setting", link: "account"},
    {name: "Connect Wallet", link: "connectWallet"},
    {name: "Blog", link: "blog"},
  ];

  const helpCenter = [
    {name: "About", link: "about"},
    {name: "Contact Us", link: "contact-us"},
    {name: "Sign Up", link: "sign-up"},
    {name: "Sign In", link: "sign-in"},
    {name: "Subscription", link: "subscription"},
  ];

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />
      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="logo" height={150} width={150} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, eum!
          Adipisci, ad nostrum. Praesentium, porro.
        </p>
        <div className={Style.sideBar_social}>
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
      <div className={Style.sideBar_menu}>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{pathname: el.link}}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openHelpMenu()}
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className={Style.sideBar_discover}>
              {helpCenter.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{pathname: el.link}}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={Style.sideBar_button}>
        <Button btnName="Create" handleClick={() => {}} />
        <Button btnName="Connect Wallet" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default Sidebar;
