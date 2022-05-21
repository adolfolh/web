import React, { Component } from "react";

import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };
render() {
  return (
    <div className="cloud-border">
        <div className="popup">
            <div className="paperOverlay opacity-25"></div>
            <button className="text-white text-6xl absolute p-4 px-8 top-0 right-0" onClick={this.handleClick}> &times; </button>
            <h1 className="pt-4 mb-8">Share this link via</h1>
            <ul className="flex justify-between mb-8 text-white">
                <li><a className="pr-2" target="_blank" rel="noreferrer" href={`http://www.twitter.com/share?url=${window.location.href}`}><span className="label"><FontAwesomeIcon icon={faTwitter} size="2x"/></span></a></li>
                <li><a className="pr-2" target="_blank" rel="noreferrer" href={`https://wa.me/whatsappphonenumber?text=${window.location.href}`}><span className="label"><FontAwesomeIcon icon={faWhatsapp} size="2x"/></span></a></li>
                <li><a className="pr-2" target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} ><span className="label"><FontAwesomeIcon icon={faFacebook} size="2x"/></span></a></li>
                <li><a className="pr-2" target="_blank" rel="noreferrer" href={`http://www.linkedin.com/share?url=${window.location.href}`}><span className="label"><FontAwesomeIcon icon={faLinkedin} size="2x"/></span></a></li>
            </ul>
            <hr className="my-4 opacity-25"/>
            <h2 className="py-4" >Or copy link</h2>
            <div className="field">
                <i className="url-icon uil uil-link"></i>
                <input className="p-2 text-gray-500" type="text" readonly value={window.location.href}/>
                <button onClick={() =>  navigator.clipboard.writeText(`${window.location.href}`)} className="text-center bg-white hover:bg-azure hover:text-white text-black font-bold py-2 px-12 lg:px-8 duration-200 transition-all lg:mb-0 font-accent">Copy</button>
            </div>
        </div>
  </div>
  );
 }
}