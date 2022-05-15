import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function CoverImage2({ title, fluid, hyperlink }) {
  const image = (
    <GatsbyImage 
      image={fluid}
      alt={`Cover Image for ${title}`}
    />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {hyperlink ? (
        <Link to={hyperlink} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
