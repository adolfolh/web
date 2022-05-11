import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import cn from "classnames";
import { Link } from "gatsby";

export default function CoverImage({ title, fluid, slug, hyperlink }) {
  const image = (
    <GatsbyImage 
      image={fluid}
      alt={`Cover Image for ${title}`}
      className={'hidden md:block m-auto max-w-full'}
    />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {slug && 
        <Link to={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      }

      {hyperlink && 
        <Link to={`${hyperlink}`} aria-label={title}>
          {image}
        </Link>
      }
    </div>
  );
}
