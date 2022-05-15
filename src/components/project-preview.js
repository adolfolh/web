import React from "react";
import CoverImage from "./cover-image2";
import { Link } from "gatsby";

export default function ProjectPreview({
  title,
  coverImage,
  excerpt,
  hyperlink,
  category,
}) {
  return (
    <div className={'grid grid-cols-1 w-full md:flex preview'}>
      <div >
        <CoverImage title={title} hyperlink={hyperlink} fluid={coverImage.small} />
      </div>
      <a className="w-full" href={hyperlink}>
        <div className={'text-black p-10 xl:p-20 cardbg h-full items-center flex'}>
          <div>
            <h3 className="text-5xl mb-3 leading-snug hover:underline">
              {title}
            </h3>

            <p className="text-base leading-relaxed mb-4 font-semibold">{excerpt}</p>

            {/** 
            <Link to="https://www.adolfolh.com">
              <Avatar name={author?.name} picture={author?.picture} />
            </Link>
            */}

            <div className="pill2">
                {category.name}
            </div> 
          </div>
        </div>
      </a>
    </div>
  );
}
