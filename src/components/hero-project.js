import React from "react";
import CoverImage from "../components/cover-image2";
import { Link } from "gatsby";

export default function HeroProject({
  title,
  coverImage,
  excerpt,
  hyperlink,
  category,
}) {
  return (
    <section className="overflow-hidden">
      <div className="">
        <CoverImage title={title} fluid={coverImage.large} hyperlink={hyperlink} />
      </div>
      <a href={hyperlink}>
        <div className="pt-8 mb-5 px-10 pb-10 md:mb-8 bg-offwhite2 transition ease-in-out delay-150 hover:bg-black hover:text-white">
          <h3 className="mb-4 text-5xl lg:text-7xl leading-tight hover:underline">
            {title}
          </h3>

          <p className="text-lg leading-relaxed mb-4 font-semibold">{excerpt}</p>
          {/** 
          <Link to="https://www.adolfolh.com">
            <Avatar name={author?.name} picture={author?.picture} />
          </Link>
          */}

          <div className="pill2">
              {category}
          </div> 
        </div>
      </a>
    </section>
  );
}
