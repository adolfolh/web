import React from "react";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import MoreStories from "../components/more-stories";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout"

import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

import NavButtons from '../components/nav-buttons'

export default function Index({ data: { allPosts, site, blog } }) {
  const heroPost = allPosts.nodes[0];
  const morePosts = allPosts.nodes.slice(1);

  return (
    <div className="flex">
      <div className="md:hidden block top-0 w-full">
        <NavButtons></NavButtons>
      </div>
      <Sidebar></Sidebar>
      <Layout>
        <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
        <Intro 
          title={'Blog.'} 
          description={'A blog for all things Data, AI, Web and any other thing that I find interesting or worth sharing :)'}
        />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories header="More Stories" posts={morePosts} />}
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 1500, height: 1500)
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
