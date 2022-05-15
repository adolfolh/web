import React from "react";
import { Link } from "gatsby";

import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div className="md:hidden flex bottom-0 w-full fixed justify-around h-16 bg-black ">
        <Link to="/">
            <div>
                <div className="p-5 text-white active:text-azure text-xl"><FontAwesomeIcon icon={faCompass} /></div>
            </div>
        </Link>
        <Link to="/blog">
            <div>
                <div className="p-5 text-white active:text-azure text-xl "><FontAwesomeIcon icon={faPenToSquare} /></div>
            </div>
        </Link>
        <Link to="/portfolio">
            <div>
                <div className="p-5 text-white active:text-azure text-xl "><FontAwesomeIcon icon={faClipboard} /></div>
            </div>
        </Link>
    </div>
  )
}