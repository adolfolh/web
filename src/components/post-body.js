import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText } from "react-datocms";
import PostPreview from "../components/post-preview";

export default function PostBody({ content }) {
  console.log(content)
  return (
    <div className="max-w-2xl mx-auto">
      <div className="px-5 md:px-0 prose prose-lg prose-blue">
        <StructuredText
          data={content}

          renderInlineRecord={({ record }) => {
            if (record.__typename === 'DatoCmsPost') {
                return (
                  <PostPreview
                    key={record.slug}
                    title={record.title}
                    coverImage={record.coverImage}
                    date={record.date}
                    slug={record.slug}
                  />
                );
              }
              return (
                <>
                  <p>Don't know how to render a block!</p>
                  <pre>{JSON.stringify(record, null, 2)}</pre>
                </>
              );
          }}

          renderLinkToRecord={({ record, children, transformedMeta }) => {
            if (record.__typename === 'DatoCmsPost') {
                return (
                  <a {...transformedMeta} href={`/posts/${record.slug}`}>
                    {children}
                  </a>
                );
              }
              return (
                <>
                  <p>Don't know how to render a block!</p>
                  <pre>{JSON.stringify(record, null, 2)}</pre>
                </>
              );
          }}

          renderBlock={({ record }) => {
            if (record.__typename === "DatoCmsImageBlock") {
              return <GatsbyImage image={record.image.gatsbyImageData} />;
            }
            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
