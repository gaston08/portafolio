import AvatarSection from "./components/AvatarSection";
import ContentSection from "./components/ContentSection";
import TechnologySection from "./components/TechnologySection";
import TechnologySectionMobile from "./components/TechnologySectionMobile";

export default function App() {
  return (
    <div id="app" className="w-screen mx-auto overflow-hidden">
      <div id="about-me" className="h-screen bg-neutral">
        <div className="bg-secondary h-screen flex flex-wrap justify-center items-center">
          <AvatarSection />
          <ContentSection />
        </div>
      </div>
      <div id="technology" className="md:h-auto h-auto bg-neutral">
        <div className="h-auto hidden md:block">
          <TechnologySection />
        </div>
        <div className="h-auto md:hidden text-neutral-content">
          <TechnologySectionMobile />
        </div>
      </div>
      <div id="projects" className="md:h-screen h-auto">
        <div className="h-full flex flex-wrap justify-center items-center">
          Projectos
        </div>
      </div>
      <div id="job-experience" className="md:h-screen h-auto">
        <div className="h-full flex flex-wrap justify-center items-center">
          Experiencia Laboral
        </div>
      </div>
      <div id="contact" className="md:h-screen h-auto">
        <div className="h-full flex flex-wrap justify-center items-center">
          Contacto
        </div>
      </div>
    </div>
  );
}
