import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/projects-grid";
import { SkillsChart } from "@/components/skills-chart";

export default function Home() {
  return (
    <main>
      <Hero />
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="container mx-auto px-4 py-12 md:py-20"
      >
        <h2
          id="projects-title"
          className="text-2xl md:text-3xl font-semibold text-pretty mb-6"
        >
          Projects
        </h2>
        <ProjectsGrid />
      </section>
      <section
        id="experience"
        aria-labelledby="experience-title"
        className="container mx-auto px-4 py-12 md:py-20"
      >
        <h2
          id="experience-title"
          className="text-2xl md:text-3xl font-semibold text-pretty mb-6"
        >
          Experience
        </h2>
        <ExperienceTimeline />
      </section>
      <section
        id="skills"
        aria-labelledby="skills-title"
        className="container mx-auto px-4 py-12 md:py-20"
      >
        <h2
          id="skills-title"
          className="text-2xl md:text-3xl font-semibold text-pretty mb-6"
        >
          Skills
        </h2>
        <SkillsChart />
      </section>

      <footer className="container mx-auto px-4 py-12 md:py-20 text-muted-foreground">
        <p className="text-sm">
          © {new Date().getFullYear()} Shrushith Kalavala. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
