import "../styles/globals.css";

import {Navbar, Footer} from "../components";

const MyApp = ({Component, pageProps}) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
);
export default MyApp;
