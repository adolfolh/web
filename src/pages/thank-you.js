import React from "react";

import bear from "../assets/bear.svg"


import { Link } from "gatsby";

const ThankYouPage = () => (
  <div>
    <div 
        className="px-10 flex-col flex items-center mt-16 mb-8"
    > 
        <h1 className="text-6xl">Sent.</h1> 
    </div>
    <p className="mx-8 md:mx-96 text-justify">Thank you for your submission! I'll try to reply as soon as possible. In the meantime you can follow me on my social media accounts or read some of my articles :)</p>
    <Link to="/">
        <div className="m-8 md:mx-96 text-center button">
                Go back home
        </div>
    </Link>
    <div className="flex-col flex items-center mx-8 my-16 md:mx-96">
        <img width="100" src={bear}></img>
    </div>
  </div>
);

export default ThankYouPage;