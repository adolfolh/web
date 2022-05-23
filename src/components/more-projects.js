import React from "react";
import ProjectPreview from '../components/project-preview'
import Box from '../components/box'

export default function MoreProjects({ projects, header, desc }) {
  return (
    <section>
      <div>
        {header &&<div class="angry-grid2">
          <div id="item-3">
            <Box type="full"  bg="bg-white">
              <div className="in-box">
                <div className="valign">
                   <h2 className="md:px-32 p-10 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                    {header}
                  </h2>
                  {desc && <div className="md:px-32 p-10 pt-0 md:flex">
                    <p className="text-justify leading-loose text-sm md:text-xl">
                      {desc}
                    </p>
                  </div>}
                </div>
              </div>
            </Box>
          </div>
        </div>}
      </div>

      {header &&<div className="res-hide">
          <h2 className="md:px-32 p-10 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            {header}
          </h2>
          {desc && <div className="md:px-32 p-10 pt-0 md:flex">
            <p className="text-justify leading-loose text-sm md:text-xl">
              {desc}
            </p>
          </div>}
      </div>}

      <div className="overflow-hidden grid grid-cols-1">
        {projects.map(project => (
            <ProjectPreview
              key={project.hyperlink}
              title={project.title}
              coverImage={project.coverImage}
              date={project.date}
              excerpt={project.excerpt}
              hyperlink={project.hyperlink}
              category={project.category}
            />
        ))}
      </div>
    </section>
  )
}
