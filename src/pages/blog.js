import React from "react";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import MoreStories from "../components/more-stories";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout"
import Navbar from '../components/navbar'
import Search from '../components/SearchContainer'

import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

export default function Blog({ data: { allPosts, site, blog } }) {
  const heroPost = allPosts.nodes[0];
  const morePosts = allPosts.nodes.slice(1);

  return (
    <div className="relative">
      <div className="paperOverlay"></div>
      <div className="flex">
        <Sidebar></Sidebar>
        <Layout>
          <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
          <Navbar></Navbar>
          <Intro 
            title={'Blog.'} 
            /*description={'A blog for all things Data, AI, Web and any other thing that I find interesting or worth sharing :)'}*/
          />

          <Search data={allPosts} searchType='Blog'></Search>

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              category={heroPost.category}
            />
          )}
          {morePosts.length > 0 && <MoreStories header="" posts={morePosts} />}
        </Layout>
      </div>
      <Footer></Footer>
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
          large: gatsbyImageData(width: 1500, height: 900)
          small: gatsbyImageData(width: 1500, height: 900)
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
