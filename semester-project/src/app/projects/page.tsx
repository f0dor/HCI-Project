import ProjectCard from "../components/Project";

export default function ProjectsPage() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between text-white">
        <ProjectCard side="left"/>
        <ProjectCard side="right"/>
        <ProjectCard side="left"/>
      </main>
    );
  }