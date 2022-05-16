import React from "react";
import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import { Link } from "gatsby";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  category,
  slug,
}) {
  return (
    <section className="overflow-hidden">
      <div className="">
        <CoverImage title={title} fluid={coverImage.large} slug={slug} />
      </div>
      <Link to={`/posts/${slug}`}>
        <div className="pt-8 mb-5 px-10 pb-10 md:mb-8 bg-offwhite2 transition ease-in-out delay-150 hover:bg-black hover:text-white preview">
          <h3 className="mb-4 text-5xl lg:text-7xl leading-tight hover:underline">
            {title}
          </h3>
          <div className="uppercase text-sm mb-4 opacity-50 font-accent">
            <Date dateString={date} /> • 5,000 views
          </div>

          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {/** 
          <Link to="https://www.adolfolh.com">
            <Avatar name={author?.name} picture={author?.picture} />
          </Link>
          */}

          <div className="pill2">
              {category.name}
          </div> 
        </div>
      </Link>
    </section>
  );
}
