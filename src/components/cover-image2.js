import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Box from "../components/box"

export default function CoverImage2({ title, fluid, hyperlink }) {
  const image = (
    <GatsbyImage 
      className="cover-img"
      image={fluid}
      alt={`Cover Image for ${title}`}
    />
  );
  return (
    <Box>
      <div className="-mx-5 sm:mx-0 rounded-2xl">
        {hyperlink ? (
          <a href={hyperlink} aria-label={title}>
            {image}
          </a>
        ) : (
          image
        )}
      </div>
    </Box>
  );
}
