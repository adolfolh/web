import React from "react";
import Intro from "../components/intro";
import MoreProjects from "../components/more-projects";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout"
import Navbar from '../components/navbar'
import HeroProject from '../components/hero-project'
import Search from '../components/SearchContainer'

import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

export default function Portfolio({ data: { allProjects, site, portfolio } }) {
  const heroProject = allProjects.nodes[0];
  const moreProjects = allProjects.nodes.slice(1);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Layout>
        <HelmetDatoCms seo={portfolio.seo} favicon={site.favicon} />
        <Search data={allProjects} searchType='Portfolio'></Search>
        <Navbar></Navbar>
        <Intro 
          title={'Portfolio.'} 
          /*description={'A portfolio featuring my projects, websites and research.'}*/
        />

        {heroProject && (
          <HeroProject
            title={heroProject.title}
            coverImage={heroProject.coverImage}
            hyperlink={heroProject.hyperlink}
            excerpt={heroProject.excerpt}
            category={heroProject.category.name}
          />
        )}
        {moreProjects.length > 0 && <MoreProjects header="More Projects" projects={moreProjects} 
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
        category {
          name
        }
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(height: 500)
        }
      }
    }
  }
`;
