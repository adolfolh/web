import React from "react";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout"
import MoreStories from "../components/more-stories";
import MoreProjects from "../components/more-projects";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import Box from "../components/box"
import SocialCard from "../components/social-card"

import character from "../assets/character.svg"
import donut from "../assets/donut.svg"

import { Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Index({data: { allPosts, allProjects, site, index, resume }}) {
  const morePosts = allPosts.nodes.slice(0);
  const moreProjects = allProjects.nodes.slice(0);

  return (
    <div className="relative">
      <div className="paperOverlay"></div>
      <div className="flex">
        <Sidebar></Sidebar>
        <Layout>
          <HelmetDatoCms seo={index.seo} favicon={site.favicon} />
          {/* Index Content */}
          <Navbar></Navbar>
          
          <div>
            <Box bg="bg-white">
              <div className="block relative md:flex border-bottom">
                <section className="md:px-32 p-10 pt-12 pb-16 md:py-32 float-left w-full md:w-2/3">
                  <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-tight">
                    Adolfo López Herrera
                  </h1>
                  <div className="pt-8">
                    <a href={resume.file.url} className="pill text-sm float-left">
                      Download resume
                    </a>
                    <SocialCard></SocialCard>
                  </div>
                </section>
                <div className="w-1/3 border-left hidden md:block">
                  <GatsbyImage 
                    className="h-full"
                    image={index.squares[0].img}
                  />
                </div>
                <div className="donut hidden lg:block">
                  <img
                    width={200}
                    src={donut}
                  />
                </div>
              </div>
            </Box>
            
            <div>
              <div className="angry-grid border-bottom">
                <div id="item-0" className="">
                  <Box type="square" bg="bg-white">
                    <div className="in-box">
                      <div className="p-16">
                        <p className="font-semibold quote">
                          Passionate about emerging technologies in machine learning.
                        </p>
                        <br/>
                        <Link to="/blog" className="underline mt-8 text-gray-500">
                          See blog
                        </Link>
                        <div className="bottom-16 absolute">
                          <div className="pill2 text-sm float-left mr-2">
                            News
                          </div>
                          <div className="pill2 text-sm float-left mr-2">
                            Tech
                          </div>
                          <div className="pill2 text-sm float-left">
                            AI
                          </div>
                        </div>
                      </div>
                    </div>
                  </Box>
                </div>
                <div id="item-1" className="border-left border-right">
                  <Box type="square"  bg="bg-white">
                    <div className="in-box">
                      <div className="p-16">
                        <p className="font-semibold quote">
                          Data scientist specialised on time series forecasting methods.
                        </p>
                        <br/>
                        <Link to="/portfolio" className="underline mt-8 text-gray-500">
                          See portfolio
                        </Link>
                        <div className="bottom-16 absolute">
                          <div className="pill2 text-sm float-left mr-2">
                            Data Analysis
                          </div>
                          <div className="pill2 text-sm float-left">
                            ML
                          </div>
                        </div>
                      </div>
                    </div>
                  </Box>
                </div>
                <div id="item-2">
                  <Box type="square overflow-hidden"  bg="bg-offwhite2">
                    <div className="in-box">
                      <div className="p-16">
                        <p className="quote mr-16">                        
                          Errors using inadequate data are much less than those using no data at all.
                        </p>
                      </div>
                      <div className="p-16">
                        <p className="bottom-16 absolute text-gray-500">
                          Charles Babbage
                        </p>
                      </div>
                      <div className="absolute top-16 right-16">
                        <FontAwesomeIcon icon={faQuoteRight} size="2x" />
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
            
            {/*
            <div className="angry-grid2 border-bottom">
              <div id="item-3">
                <Box type="full"  bg="bg-white">
                  <div className="in-box">
                    <div className="valign">
                      <h2 className="px-32 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                        About me
                      </h2>
                      <div className="px-32 pt-0 md:flex">
                        <p className="text-justify leading-loose text-sm md:text-xl">
                          {index.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            </div>

            
            <div>
              <div class="angry-grid3">
                <div id="item-4" className="border-bottom">
                  <Box type="two-thirds" bg="bg-white">
                    <div className="in-box">
                      <div className="valign px-32">
                        <p className="text-justify leading-loose text-sm md:text-xl ">
                          {index.text1}
                        </p>
                      </div>
                    </div>
                  </Box>
                </div>
                <div id="item-5" className="border-bottom">
                  <Box type="square overflow-hidden"  bg="bg-offwhite2">
                    <div className="in-box">
                      <div className="hvalign w-full">
                        <GatsbyImage 
                          image={index.squares[1].img}
                        />
                      </div>
                    </div>
                  </Box>
                </div>
                <div id="item-6" className="border-bottom">
                  <Box type="square overflow-hidden"  bg="bg-offwhite2">
                    <div className="in-box">
                      <div className="hvalign w-full">
                        <GatsbyImage 
                          image={index.squares[2].img}
                        />
                      </div>
                    </div>
                  </Box>
                </div>
                <div id="item-7" className="border-bottom">
                  <Box type="two-thirds"  bg="bg-white">
                    <div className="in-box">
                      <div className="valign px-32">
                        <p className="text-justify leading-loose text-sm md:text-xl ">
                          {index.text2}
                        </p>
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
            */}

            <div className="border-bottom">
              <Box bg="bg-white">
                <div className="md:p-32 md:pb-16 p-10">
                  <p className="text-justify leading-loose text-sm md:text-xl">
                    {index.description}
                  </p>
                  <br/>
                  <p className="text-justify leading-loose text-sm md:text-xl">
                    {index.text1}
                  </p>
                  <br/>
                  <p className="text-justify leading-loose text-sm md:text-xl">
                    {index.text2}
                  </p>
                </div>
                <div className="flex md:pb-32 pb-10 justify-center lg:hidden">
                  <img
                    width={200}
                    src={donut}
                  />
                </div>
              </Box>
            </div>

            {moreProjects.length > 0 && <MoreProjects 
            header="My Projects." 
            desc="These are some personal projects I have been working on to learn 
                  more about different technologies. I like exploring data-centric 
                  projects and applying them to web applications and carrying out 
                  research on artificial intelligence and machine learning."
            projects={moreProjects} 
            />}

            <Link to="/portfolio">
              <Box>
                <div className="button2 text-center w-full border-bottom border-top">
                  <h3 className="text-2xl"> See more projects</h3>
                </div>
              </Box>
            </Link>
            
            {morePosts.length > 0 && <MoreStories 
              header="My Articles." 
              desc="Recently, I began writing articles about my research on 
                    data science and other fields. I am new to this but my aim
                    is to write stories that are comprehensive and share my 
                    passion for these topics."
              posts={morePosts} 
            />}

            {morePosts.length > 0 &&<Link to="/blog">
              <Box>
                <div className="button2 text-center w-full border-bottom border-top">
                  <h3 className="text-2xl"> See more articles</h3>
                </div>
              </Box>
            </Link>}
            
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
      description,
      text1,
      text2,
      squares {
        img: gatsbyImageData(width: 1500, height: 1500)
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500, height: 900)
          small: gatsbyImageData(width: 900, height: 540)
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
          large: gatsbyImageData(width: 1500, height: 900)
          small: gatsbyImageData(width: 1000, height: 600)
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
