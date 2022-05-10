import React from "react";
import { Link } from "gatsby";
import Logo from "../assets/LOGO-01.svg"

export default function Sidebar() {
  return (
    <div className="bg-offwhite1 overflow-hidden md:w-64 md:fixed md:h-full md:overflow-auto">
      <Link to="/">
        <img src={Logo} alt="Logo"></img>
      </Link>
      <div className="absolute w-full bottom-0">
        <Link to="/blog">
          <div className={'text-xl p-5 text-center bg-azure transition ease-in-out delay-150 hover:bg-black text-white'}>
            <p className="font-bold uppercase">Blog</p>
          </div>
        </Link>
        <Link to="/portfolio">
          <div className={'text-xl p-5 text-center bg-azure transition ease-in-out delay-150 hover:bg-black text-white'}>
            <p className="font-bold uppercase">Work</p>
          </div>
        </Link>
      </div>
    </div>
  )
}