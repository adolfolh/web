import React from "react";

export default function Intro({
  title,
  description,
}) {
  return (
    <section className="px-10 flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}
      </h1>
      <h4 className="text-center md:text-right text-lg mt-5 md:pl-8 font-accent">
       {description}
      </h4>
    </section>
  )
}
