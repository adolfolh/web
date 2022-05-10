import React from "react";
import { Link } from "gatsby";
import NavButtons from './nav-buttons'
import Logo from "../assets/LOGO-01.svg"

export default function Sidebar() {
  return (
    <div className="bg-offwhite1 overflow-hidden hidden md:block md:w-64 md:fixed md:h-full md:overflow-auto">
      <Link to="/">
        <img src={Logo} alt="Logo"></img>
      </Link>
      <div className="hidden md:block absolute bottom-0 w-full">
          <NavButtons></NavButtons>
      </div>
    </div>
  )
}