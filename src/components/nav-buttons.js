import React from "react";
import { Link } from "gatsby";

export default function NavButtons() {
  return (
    <div className="w-full hidden">
        <Link to="/">
            <div className={'text-center button'}>
                <p className="font-bold">Home</p>
            </div>
        </Link>
        <Link to="/blog">
            <div className={'text-center button'}>
                <p className="font-bold">Blog</p>
            </div>
        </Link>
        <Link to="/portfolio">
            <div className={'text-center button'}>
                <p className="font-bold">Projects</p>
            </div>
        </Link>
    </div>
  )
}