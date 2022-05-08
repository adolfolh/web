import React from "react";
import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import { Link } from "gatsby";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className={''}>
      <div >
        <CoverImage slug={slug} title={title} fluid={coverImage.small} />
      </div>
      <div className={'p-10 h-full cardbg'}>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link to={`/posts/${slug}`} className="hover:underline visited:text-tomato">
            {title}
          </Link>
        </h3>
        <div className="uppercase text-sm mb-4 opacity-50">
          <Date dateString={date} />
        </div>
        <p className="uppercase text-base leading-relaxed mb-4 font-semibold">{excerpt}</p>
        <Link to="https://www.adolfolh.com">
          <Avatar name={author?.name} picture={author?.picture} />
        </Link>
      </div>
    </div>
  );
}
