import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Box from "../components/box"

export default function CoverImage({ title, fluid, slug }) {
  const image = (
    <GatsbyImage 
      className="cover-img"
      image={fluid}
      alt={`Cover Image for ${title}`}
    />
  );
  return (
    <Box>
      <div className="-mx-5 sm:mx-0">
        {slug ? (
          <Link to={`/posts/${slug}`} aria-label={title}>
            {image}
          </Link>
        ) : (
          image
        )}
      </div>
    </Box>
  );
}
