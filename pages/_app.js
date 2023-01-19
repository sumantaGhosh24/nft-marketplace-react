import "../styles/globals.css";

import {Navbar, Footer} from "../components";
import {NFTMarketplaceProvider} from "../Context/NFTMarketplaceContext";

const MyApp = ({Component, pageProps}) => {
  return (
    <div>
      <NFTMarketplaceProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NFTMarketplaceProvider>
    </div>
  );
};
export default MyApp;
