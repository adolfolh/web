import React from "react";
import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import { Link } from "gatsby";

export default function ProjectPreviewInline({
  title,
  coverImage,
  date,
  excerpt,
  hyperlink,
}) {
  return (
    <div className={'grid grid-cols-1 md:flex'}>
      <div >
        <CoverImage title={title} hyperlink={hyperlink} fluid={coverImage.small} />
      </div>
      <Link className="w-full" to={hyperlink}>
        <div className={'text-black p-10 xl:p-20 cardbg h-full items-center flex'}>
          <div>
            <h3 className="text-5xl mb-3 leading-snug hover:underline">
              {title}
            </h3>

            <p className="uppercase text-base leading-relaxed mb-4 font-semibold">{excerpt}</p>

            {/** 
            <Link to="https://www.adolfolh.com">
              <Avatar name={author?.name} picture={author?.picture} />
            </Link>
            */}

            <div className="pill2">
                Machine Learning
            </div> 
          </div>
        </div>
      </Link>
    </div>
  );
}
