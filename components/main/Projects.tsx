import Card from "@/types/Card";
import { getContents } from "@/util/contents"

export default function Projects() {
  const projects = getContents("projects");

  return (
    <section id="projects">
      <h2 className="text-3xl font-bold text-center">Projects</h2>

      <div className="flex justify-center flex-wrap py-4 gap-3">
        {projects.map((project) => (
          <Card
            key={project.slug}
            title={project.title}
            description={project.description}
            href={project.href}
            lang={project.lang}
            icon={project.icon}
          />
        ))}
      </div>
    </section>
  );
}