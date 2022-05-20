import React from "react";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout"
import Intro from "../components/intro";
import MoreStories from "../components/more-stories";
import MoreProjects from "../components/more-projects";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import Box from "../components/box"

import grid1 from "../assets/grid-01.svg"
import dsd from "../assets/dsd.svg"

import { Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Index({data: { allPosts, allProjects, site, index, resume }}) {
  const morePosts = allPosts.nodes.slice(0);
  const moreProjects = allProjects.nodes.slice(0);

  return (
    <div>
      <div className="flex">
        <Sidebar></Sidebar>
        <Layout>
          <HelmetDatoCms seo={index.seo} favicon={site.favicon} />
          {/* Index Content */}
          <Navbar></Navbar>
          
          <div>
            <Box bg="bg-white">
              <div>
                <section className="px-10 pt-12 pb-16 md:py-32">
                  <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-tight">
                    Adolfo López Herrera
                  </h1>
                  <div className="pt-8">
                    <a href={resume.file.url} className="pill text-sm">
                      Download resume
                    </a>
                  </div>
                </section>
              </div>
            </Box>

            <div>
              <div className="angry-grid">
                <div id="item-0">
                  <Box type="square" bg="bg-white">
                    <div className="in-box">
                      <div className="hvalign w-full p-20">
                        <img 
                          src={dsd}
                        />
                      </div>
                    </div>
                  </Box>
                </div>
                <div id="item-1">
                  <Box type="square"  bg="bg-white">
                    <div className="in-box">
                      <div className="valign px-10">
                        <p className="text-justify leading-loose text-sm md:text-xl">
                          I am Adolfo López Herrera and I'm currently working on my undergraduate dissertation on machine learning, 
                          but I am also looking for my next job/project as a data scientist. 
                          I was born in Spain and I study in the UK, working on my bachelor’s degree 
                          in computer science. My biggest interests lay in the subject of data 
                          science and AI.
                        </p>
                      </div>
                    </div>
                  </Box>
                </div>
                <div id="item-2">
                  <Box type="square overflow-hidden rounded-xl"  bg="bg-offwhite2">
                    <div className="in-box">
                      <div className="hvalign w-full">
                        <img 
                          src={grid1}
                        />
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
            </div>

            <div className="desc">
              <Box bg="bg-white">
                <div className="p-10">
                  <p className="text-justify leading-loose text-sm md:text-xl">
                    I am Adolfo López Herrera and I'm currently working on my undergraduate dissertation on machine learning, 
                    but I am also looking for my next job/project as a data scientist. 
                    I was born in Spain and I study in the UK, working on my bachelor’s degree 
                    in computer science. My biggest interests lay in the subject of data 
                    science and AI.
                  </p>
                </div>
              </Box>
            </div>

            {moreProjects.length > 0 && <MoreProjects 
            header="My Projects." 
            desc="Lorem Ipsum is simply dummy text of the printing and since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            projects={moreProjects} 
            />}

            <Link to="/portfolio">
              <Box>
                <div className="button2 text-center w-full">
                  <h3 className="text-2xl"> See more projects</h3>
                </div>
              </Box>
            </Link>

            <div>
              <div class="angry-grid3">
                <div id="item-4">
                  <Box type="two-thirds" bg="bg-white">
                    <div className="in-box">
                      <div className="valign px-10">
                        <p className="text-justify leading-loose text-sm md:text-xl ">
                          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                        </p>
                      </div>
                    </div>
                  </Box>
                </div>
                <div id="item-5">
                  <Box type="square overflow-hidden rounded-xl"  bg="bg-offwhite2">
                    <div className="in-box">
                      <div className="hvalign w-full">
                        <img
                          src={grid1}
                        />
                      </div>
                    </div>
                  </Box>
                </div>
                <div id="item-6">
                  <Box type="square overflow-hidden rounded-xl"  bg="bg-offwhite2">
                    <div className="in-box">
                      <div className="hvalign w-full">
                        <img 
                          src={grid1}
                        />
                      </div>
                    </div>
                  </Box>
                </div>
                <div id="item-7">
                  <Box type="two-thirds"  bg="bg-white">
                    <div className="in-box">
                      <div className="valign px-10">
                        <p className="text-justify leading-loose text-sm md:text-xl ">
                          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                        </p>
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
            
            {morePosts.length > 0 && <MoreStories 
              header="My Articles." 
              desc="Dummy text of the printing and typeset dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
              posts={morePosts} 
            />}

            <Link to="/blog">
              <Box>
                <div className="button2 text-center w-full">
                  <h3 className="text-2xl"> See more articles</h3>
                </div>
              </Box>
            </Link>
            
            <Contact></Contact>

          </div>
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
          small: gatsbyImageData(width: 900, height: 900)
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
