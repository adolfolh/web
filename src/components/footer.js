import React from "react";
import Container from './container'

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="p-10 flex flex-col lg:flex-row items-center">
          <p className="text-xs opacity-25 lg:text-xs tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Copyright &copy; Adolfo López Herrera. All rights reserved.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.datocms.com/docs/next-js"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Discuss on Twitter
            </a>
            <a
              href="https://github.com/datocms/nextjs-demo"
              className="mx-3 font-bold hover:underline"
            >
              Contact me
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
