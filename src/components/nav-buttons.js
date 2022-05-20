import React from "react";
import { Link } from "gatsby";

import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavButtons() {
  return (
    <div className="w-full">
        <Link to="/">
            <div className={'text-left navbutton'}>
                <div className="icon text-center"><FontAwesomeIcon icon={faCompass} /></div>
                <p className="font-bold overflow-hidden">Home</p>
            </div>
        </Link>
        <Link to="/portfolio">
            <div className={'text-left navbutton'}>
                <div className="icon text-center"><FontAwesomeIcon icon={faClipboard} /></div>
                <p className="font-bold overflow-hidden">Projects</p>
            </div>
        </Link>
        <Link to="/blog">
            <div className={'text-left navbutton'} disabled>
                <div className="icon text-center"><FontAwesomeIcon icon={faNewspaper} /></div>   
                <p className="font-bold overflow-hidden">Blog</p>
            </div>
        </Link>
    </div>
  )
}