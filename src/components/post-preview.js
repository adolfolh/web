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
      <Link to={`/posts/${slug}`}>
        <div className={'text-black p-10 h-full cardbg'}>
          <h3 className="text-3xl mb-3 leading-snug hover:underline">
            {title}
            
          </h3>
          <div className="uppercase text-sm mb-4 opacity-50">
            <Date dateString={date} />
          </div>
          <p className="uppercase text-base leading-relaxed mb-4 font-semibold">{excerpt}</p>

          {/** 
          <Link to="https://www.adolfolh.com">
            <Avatar name={author?.name} picture={author?.picture} />
          </Link>
          */}

          <div className="border-2 border-black py-1 px-2 rounded-full w-max my-3 hover:border-white">
              5,000 views
          </div> 
        </div>
      </Link>
    </div>
  );
}
