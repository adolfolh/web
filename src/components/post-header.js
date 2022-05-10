import React from "react";
import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:px-10 md:block md:mb-12">
                  {/** 
          <Link to="https://www.adolfolh.com">
            <Avatar name={author?.name} picture={author?.picture} />
          </Link>
          */}

          <div className="pill2">
              5,000 views
          </div> 
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} fluid={coverImage?.gatsbyImageData} />
      </div>
      <div className="px-5 max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {/** 
          <Link to="https://www.adolfolh.com">
            <Avatar name={author?.name} picture={author?.picture} />
          </Link>
          */}

          <div className="pill2">
              5,000 views
          </div>         
        </div>
        <div className="opacity-50 uppercase md:px-0 mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
