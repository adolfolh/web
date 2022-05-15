import React from "react";
import ProjectPreview from '../components/project-preview'

export default function MoreProjects({ projects, header, desc }) {
  return (
    <section>
      {header && <h2 className="p-10 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {header}
      </h2>}
      {desc && <div className="px-10 pt-0 mb-16 md:px-32 md:flex">
        <p className="text-justify leading-loose text-sm md:text-xl">
        {desc}
        </p>
      </div>}
      <div className="checkered overflow-hidden grid grid-cols-1">
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
