import React from "react";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout"
import Intro from "../components/intro";
import MoreStories from "../components/more-stories";
import MoreProjects from "../components/more-projects";
import Contact from "../components/contact";
import Navbar from "../components/navbar";

import smile from "../assets/smile.svg"
import star from "../assets/star.svg"

import { Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

export default function Index({data: { allPosts, allProjects, site, index, resume }}) {
  const morePosts = allPosts.nodes.slice(0);
  const moreProjects = allProjects.nodes.slice(0);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Layout>
        <HelmetDatoCms seo={index.seo} favicon={site.favicon} />
        {/* Index Content */}
        <Navbar></Navbar>
        <div className="xl:h-screen xl:items-center xl:flex items-baseline">
          <div>
            <Intro 
              title="Data Scientist & Developer."
            />
            <div className="px-10 pt-0 mb-16 md:py-10 md:px-32">
              <p className="text-justify leading-loose text-sm md:text-xl">
                I’m Adolfo López Herrera and I'm currently working on my undergraduate dissertation on machine learning, 
                but I am also looking for my next job/project as a data scientist. 
                I was born in Spain and I study in the UK, working on my bachelor’s degree 
                in computer science. My biggest interests lay in the subject of data 
                science and AI.
              </p>
              <div className="mt-8">
                <a href={resume.file.url} className="pill">
                  Download resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {moreProjects.length > 0 && <MoreProjects 
          header="My Projects." 
          desc="Lorem Ipsum is simply dummy text of the printing and since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          projects={moreProjects} 
        />}
        <Link to="/portfolio">
          <div className="button2 text-center w-full">
            <h3 className="text-2xl"> See more projects</h3>
          </div>
        </Link>
        
        <h2 className="p-10 mb-8 mt-16 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            My Interests.
        </h2>
        <div className="px-10 pt-0 mb-16 md:px-32 md:flex">
          <img src={smile} width="150" className="hidden md:block pr-16"></img>
          <p className="text-justify leading-loose text-sm md:text-xl">
          Lorem Ipsum is simply dummy text of the printing and since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
        </div>
        <div className="px-10 pt-0 mb-16 md:px-32 md:flex">
          <p className="text-justify leading-loose text-sm md:text-xl">
          Dummy text of the printing and typeset dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.
          </p>
          <img src={star} width="150" className="hidden md:block pl-16"></img>
        </div>

        {morePosts.length > 0 && <MoreStories 
          header="My Articles." 
          desc="Dummy text of the printing and typeset dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
          posts={morePosts} 
        />}
        <Link to="/blog">
          <div className="button2 text-center w-full">
            <h3 className="text-2xl"> See more articles</h3>
          </div>
        </Link>
        
        <Contact></Contact>

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
    index: datoCmsIndex {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 700, height: 700)
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
    allProjects: allDatoCmsProject(sort: { fields: date, order: DESC }, limit: 2) {
      nodes {
        title
        date
        excerpt
        hyperlink
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 700, height: 700)
        }
        category {
          name
        }
      }
    }
    resume : datoCmsResume {
      file {
        url
      }
    }
  }
`;
