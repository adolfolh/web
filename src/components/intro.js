import React from "react";

export default function Intro() {
  return (
    <section className="px-10 flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-right text-lg mt-5 md:pl-8">
        A blog for all things Data, AI and Web. 
        <br></br>
        And any other thing that I find amusing :)
      </h4>
    </section>
  )
}
