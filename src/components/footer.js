import React from "react";
import Container from './container'
import NavButtons from './nav-buttons'
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="p-10 ml-0 md:ml-16 flex flex-col lg:flex-row items-center">
          <p className="text-xs opacity-25 lg:text-xs tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Copyright &copy; Adolfo López Herrera. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
