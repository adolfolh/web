import React from "react";
import CoverImage from "./cover-image2";

import Box from "../components/box"

export default function ProjectPreview({
  title,
  coverImage,
  excerpt,
  hyperlink,
  category,
}) {
  return (
    <div className={'grid grid-cols-1 w-full md:flex preview'}>
      <div>
        <CoverImage title={title} hyperlink={hyperlink} fluid={coverImage.small} />
      </div>
      <a className="w-full h-full flex flex-col" href={hyperlink}>
        <Box type="h-full" bg="bg-offwhite2">
          <div className={'text-black p-10 xl:p-20 cardbg h-full items-center flex'}>
            <div>
              <h3 className="text-5xl pb-3 leading-snug hover:underline">
                {title}
              </h3>

              <p className="text-base leading-relaxed pb-4">{excerpt}</p>

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
        </Box>
      </a>
    </div>
  );
}
