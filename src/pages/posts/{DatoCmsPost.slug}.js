import React from "react";
import Container from "../../components/container";
import Header from "../../components/header";
import MoreStories from "../../components/more-stories";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import Layout from "../../components/layout"
import Navbar from "../../components/navbar"

import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

export default function Post({ data: { site, post, morePosts } }) {
  return (
    <div className="flex m-0">
      <Sidebar></Sidebar>
      <Layout>
        <HelmetDatoCms seo={post.seo} favicon={site.favicon} />
        <Navbar></Navbar>
        <Header />
        <article className="mb-16">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />
        </article>

        {morePosts.nodes.length > 0 && <MoreStories header="More Stories" posts={morePosts.nodes} />}

        <Footer></Footer>
      </Layout>
    </div>
  );
}

export const query = graphql`
  query PostBySlug($id: String) {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    post: datoCmsPost(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      date
      coverImage {
        gatsbyImageData(width: 1500)
      }
      content {
        value
        links {
          __typename
          ... on DatoCmsPost {
            slug
            title
            date
            excerpt
            coverImage {
              small: gatsbyImageData(width: 760, height: 200)
            }
            id : originalId
          }
        }
        blocks {
          __typename
          id: originalId
          image {
            gatsbyImageData(width: 700)
          }
        }
      }
      author {
        name
        picture {
          gatsbyImageData(
            layout: FIXED
            width: 32
            height: 32
            imgixParams: { sat: -100 }
          )
        }
      }

    }
    morePosts: allDatoCmsPost(
      sort: { fields: date, order: DESC }
      limit: 3
      filter: { id: { ne: $id } }
    ) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          small: gatsbyImageData(width: 760, height: 760)
        }
        category {
          name
        }
        author {
          name
          picture {
            gatsbyImageData(
              layout: FIXED
              width: 32
              height: 32
              imgixParams: { sat: -100 }
            )
          }
        }
      }
    }
  }
`;
