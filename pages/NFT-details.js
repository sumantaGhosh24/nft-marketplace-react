import React, {useEffect, useState, useContext} from "react";
import {useRouter} from "next/router";

import {Category, Brand} from "../components";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";

const NFTDetails = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;
