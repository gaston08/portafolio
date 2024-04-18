import AvatarSection from "./components/AvatarSection";
import ContentSection from "./components/ContentSection";
import TechnologySection from "./components/TechnologySection";
import TechnologySectionMobile from "./components/TechnologySectionMobile";
import ProjectsSection from "./components/ProjectsSection";
import JobsSection from "./components/JobsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div id="app" className="w-screen mx-auto overflow-hidden bg-neutral">
      <div id="about-me" className="h-screen bg-neutral">
        <div className="h-screen flex flex-wrap justify-center items-center content-center ">
          <AvatarSection />
          <ContentSection />
        </div>
      </div>
      <div id="technology" className="md:h-auto h-auto bg-neutral">
        <div className="h-auto hidden md:block">
          <div className="mb-20">
            <div className="text-2xl text-neutral-content divider divider-accent mt-0">
              Tecnologías
            </div>
          </div>
          <TechnologySection />
        </div>
        <div className="h-auto md:hidden text-neutral-content">
          <TechnologySectionMobile />
        </div>
      </div>
      <div id="projects" className="h-auto">
        <div className="h-full flex flex-wrap justify-center items-center">
          <ProjectsSection />
        </div>
      </div>
      <div id="job-experience" className="h-auto mt-20">
        <div className="text-2xl text-neutral-content divider divider-accent mt-20 mb-12">
          Experiencia Laboral
        </div>
        <div className="h-full flex flex-wrap justify-center items-center">
          <JobsSection />
        </div>
      </div>
      <div id="contact" className="h-screen">
        <div className="text-2xl text-neutral-content divider divider-accent mt-20">
          Contacto
        </div>
        <div className="h-full flex flex-wrap justify-center items-center">
          <ContactSection />
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2024 - Todos los derechos reservados.</p>
          <p>gaston08pedraza@gmail.com</p>
        </aside>
      </footer>
    </div>
  );
}
