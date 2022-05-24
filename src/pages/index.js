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
import SocialCard from "../components/social-card"

import { Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

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
              <div>
                <section className="md:px-32 p-10 pt-12 pb-16 md:py-32 border-bottom">
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
              </div>
            </Box>
            
            <div>
              <div className="angry-grid border-bottom">
                <div id="item-0" className="">
                  <Box type="square" bg="bg-white">
                    <div className="in-box">
                      <div className="hvalign w-full overflow-hidden">
                        <GatsbyImage 
                          image={index.squares[0].img}
                        />
                      </div>
                    </div>
                  </Box>
                </div>
                <div id="item-1" className="border-left border-right">
                  <Box type="square"  bg="bg-white">
                    <div className="in-box">
                      <div className="valign px-32">
                        <p className="text-justify leading-loose text-sm md:text-xl">
                          content
                        </p>
                      </div>
                    </div>
                  </Box>
                </div>
                <div id="item-2">
                  <Box type="square overflow-hidden"  bg="bg-offwhite2">
                    <div className="in-box">
                      <div className="hvalign w-full">
                        content
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
            </div>

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

            <div className="desc border-bottom">
              <Box bg="bg-white">
                <div className="md:p-32 p-10">
                  <p className="text-justify leading-loose text-sm md:text-xl">
                    {index.description}
                  </p>
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

            <Link to="/blog">
              <Box>
                <div className="button2 text-center w-full border-bottom border-top">
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
