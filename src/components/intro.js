import React from "react";

export default function Intro({
  title,
  description,
}) {
  return (
    <section className="px-10 flex-col md:flex-row flex items-center md:justify-between mt-28 mb-12 md:mt-36 md:mb-24">
      <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}
      </h1>
      <h4 className="text-center md:text-right text-lg mt-5 md:pl-8 font-accent">
       {description}
      </h4>
    </section>
  )
}
