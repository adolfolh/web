import React from "react";
import ProjectPreview from '../components/project-preview'

export default function MoreProjects({ projects, header }) {
  return (
    <section>
      <h2 className="p-10 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {header}
      </h2>
      <div className="checkered overflow-hidden grid grid-cols-1">
        {projects.map(project => (
          <ProjectPreview
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            excerpt={project.excerpt}
            hyperlink={project.hyperlink}
          />
        ))}
      </div>
    </section>
  )
}
