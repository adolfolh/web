import React from "react";
import PostPreview from '../components/post-preview'
import Box from '../components/box'

export default function MoreStories({ posts, header, desc }) {
  return (
    <section>
      <div>
      {header &&
        <div className="angry-grid2">
          <div id="item-3">
            <Box type="full" bg="bg-white">
              <div className="in-box">
                <div className="valign">
                   <h2 className="p-10 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight ">
                    {header}
                  </h2>
                  {desc && <div className="px-10 pt-0 mb-16 md:flex">
                    <p className="text-justify leading-loose text-sm md:text-xl">
                      {desc}
                    </p>
                  </div>}
                </div>
              </div>
            </Box>
          </div>
        </div>}
      </div>

      {header &&<div className="res-hide">
          <h2 className="p-10 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            {header}
          </h2>
          {desc && <div className="px-10 pt-0 pb-16 md:flex">
            <p className="text-justify leading-loose text-sm md:text-xl">
              {desc}
            </p>
          </div>}
      </div>}

      <div className="checkered overflow-hidden grid grid-cols-1 md:flex md:flex-wrap">
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            category={post.category}
          />
        ))}
      </div>
    </section>
  )
}
