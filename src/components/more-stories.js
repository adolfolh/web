import React from "react";
import PostPreview from '../components/post-preview'

export default function MoreStories({ posts, header, desc }) {
  return (
    <section>
      {header && <h2 className="p-10 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {header}
      </h2>}
      {desc && <div className="px-10 pt-0 mb-16 md:px-32 md:flex">
        <p className="text-justify leading-loose text-sm md:text-xl">
        {desc}
        </p>
      </div>}
      <div className="checkered overflow-hidden grid grid-cols-1 md:grid-cols-3">
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
