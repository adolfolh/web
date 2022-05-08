import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <GatsbyImage
        image={picture.gatsbyImageData}
        className="w-10 h-10 rounded-full mr-4"
        alt={`Photo of ${name}`}
      />
      <div className="text-sm font-semibold">{name}</div>
    </div>
  );
}
