import React from "react";
import Intro from "../components/intro";
import MoreProjects from "../components/more-projects";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout"
import Navbar from '../components/navbar'

import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

export default function Portfolio({ data: { allProjects, site, portfolio } }) {
  const moreProjects = allProjects.nodes.slice(0);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Layout>
        <HelmetDatoCms seo={portfolio.seo} favicon={site.favicon} />
        <Navbar></Navbar>
        <Intro 
          title={'Portfolio.'} 
          /*description={'A portfolio featuring my projects, websites and research.'}*/
        />
        
        {moreProjects.length > 0 && <MoreProjects  projects={moreProjects} 
        />}

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
    portfolio: datoCmsPortfolio {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allProjects: allDatoCmsProject(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        hyperlink
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 700, height: 700)
        }
      }
    }
  }
`;
