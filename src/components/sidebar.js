import React from "react";
import { Link } from "gatsby";
import NavButtons from './nav-buttons'
import Logo from "../assets/smile.svg"

import { faMedium } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faNewspaper } from "@fortawesome/free-regular-svg-icons"
import { faSadCry } from "@fortawesome/free-regular-svg-icons"
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  return (
    <div className="bg-black overflow-hidden hidden md:block md:w-16 md:fixed md:h-full md:overflow-auto sidebar">
      <div className="flex flex-col justify-around h-screen">
      <Link to="/" className="my-2 flex items-center">
        <img src={Logo} alt="Logo" className="w-16 p-2 float-left"></img>
        {<h1 className="font-semibold overflow-hidden text-white text-base whitespace-nowrap w-full">Adolfo López Herrera</h1>}
      </Link>

        <div className="w-full">
          <hr className="m-2 opacity-25"/>
              <NavButtons></NavButtons>
        </div>

        {<div className="w-full">
          <hr className="m-2 opacity-25"/>
            <Link to="/">
              <button className={'text-left navbutton'} disabled>
                  <div class="icon text-center"><FontAwesomeIcon icon={faCalendar} /></div>
                  <p className="overflow-hidden whitespace-nowrap">Chronify (TBA)</p>
              </button>
            </Link>
            <Link to="/">
              <button className={'text-left navbutton'} disabled>
                  <div class="icon text-center"><FontAwesomeIcon icon={faNewspaper} /></div>
                  <p className="overflow-hidden whitespace-nowrap">Debatle (TBA)</p>
              </button>
            </Link>
            <Link to="/">
              <button className={'text-left navbutton'} disabled>
                  <div class="icon text-center"><FontAwesomeIcon icon={faSadCry} /></div>
                  <p className="overflow-hidden whitespace-nowrap">Moodi (TBA)</p>
              </button>
            </Link>
        </div>}

        <div className="w-full">
          <hr className="m-2 opacity-25"/>
            <Link to="/">
              <div className={'text-left navbutton'}>
                  <div class="icon text-center"><FontAwesomeIcon icon={faMedium} /></div>
                  <p className="overflow-hidden whitespace-nowrap">Medium</p>
              </div>
            </Link>
            <Link to="/">
              <div className={'text-left navbutton'}>
                  <div class="icon text-center"><FontAwesomeIcon icon={faGithub} /></div>
                  <p className="overflow-hidden whitespace-nowrap">Github</p>
              </div>
            </Link>
            <Link to="/">
              <div className={'text-left navbutton'}>
                <div class="icon text-center"><FontAwesomeIcon icon={faLinkedin} /></div>
                <p className="overflow-hidden whitespace-nowrap">LinkedIn</p>
              </div>
            </Link>
        </div>
        
        <div className="w-full">
          <hr className="m-2 opacity-25"/>
          <Link to="/">
            <div className={'text-left navbutton'}>
              <div class="icon text-center"><FontAwesomeIcon icon={faShareFromSquare} /></div>
              <p className="overflow-hidden whitespace-nowrap">Share</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}