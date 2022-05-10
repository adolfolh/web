import React from "react";
import Container from "../components/container";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout"

import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

export default function Index({data: { allPosts, site, blog }}) {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Container>
        <Layout>
          <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
          {/* Index Content */}

          <Footer></Footer>
        </Layout>
      </Container>
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
          small: gatsbyImageData(width: 760, height: 760)
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
