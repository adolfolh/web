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
  author,
  slug,
}) {
  return (
    <section className="bg-cream transition ease-in-out delay-150 hover:bg-black hover:text-white">
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} fluid={coverImage.large} slug={slug} />
      </div>
      <div className="mb-5 px-10 pb-10 md:mb-8">
        <h3 className="mb-4 text-5xl lg:text-7xl leading-tight">
          <Link to={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="uppercase text-sm mb-4 opacity-50">
          <Date dateString={date} />
        </div>

        <p className="uppercase text-lg leading-relaxed mb-4 font-semibold">{excerpt}</p>
        <Link to="https://www.adolfolh.com">
          <Avatar name={author?.name} picture={author?.picture} />
        </Link>
      </div>
    </section>
  );
}
