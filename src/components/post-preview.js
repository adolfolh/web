import React from "react";
import Date from "../components/date";
import CoverImage from "./cover-image";
import { Link } from "gatsby";
import Box from "./box";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  category,
}) {
  return (
    <div className={'flex-grow w-full md:w-1/3 preview border-top border-bottom'}>
      <div>
        <CoverImage className="max-h-80 h-auto" slug={slug} title={title} fluid={coverImage.small} />
      </div>
      <Link style={{textDecoration: 'none'}} to={`/posts/${slug}`}>
        <div className={'text-black p-10 md:p-16 h-full cardbg bg-offwhite2'}>
          <h2 className="text-3xl mb-3 leading-snug hover:underline">
            {title}
          </h2>
          <div className="uppercase text-sm mb-4 opacity-50 font-accent">
            <Date dateString={date} /> {/*• 5,000 views*/}
          </div>
          <p className="text-base leading-relaxed mb-4">{excerpt}</p>

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
    </div>
  );
}
