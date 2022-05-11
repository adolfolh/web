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
    <div className={'flex-grow md:w-1/3'}>
      <div >
        <CoverImage slug={slug} title={title} fluid={coverImage.small} />
      </div>
      <Link style={{textDecoration: 'none'}} to={`/posts/${slug}`}>
        <div className={'text-black p-10 h-full default-cardbg cardbg'}>
          <h2 className="text-3xl mb-3 leading-snug hover:underline">
            {title}
          </h2>
          <div className="uppercase text-sm mb-4 opacity-50">
            <Date dateString={date} />
          </div>
          <p className="uppercase text-base leading-relaxed mb-4 font-semibold">{excerpt}</p>

          {/** 
          <Link to="https://www.adolfolh.com">
            <Avatar name={author?.name} picture={author?.picture} />
          </Link>
          */}

          <div className="pill2">
              5,000 views
          </div> 
        </div>
      </Link>
    </div>
  );
}
