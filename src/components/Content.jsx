import Section from "./Section";
import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";

function Content({ theme }) {
  return (
    <div
      className={
        `content ` +
        (theme === "light" ? "text-dark " : "text-light ") +
        `bg-${theme}`
      }
    >
      <Section section="About Me">
        <AboutMe theme={theme} />
      </Section>
      <Section section="Skills & Certifications">
        <Skills theme={theme} />
      </Section>
      <Section section="Work Experience">
        <WorkExperience theme={theme} />
      </Section>
      <Section section="Projects">
        <Projects theme={theme} />
      </Section>
      <Section section="Resume">
        <Resume theme={theme} />
      </Section>
      <Section section="Contact Me">
        <ContactMe theme={theme} />
      </Section>
      <Section section=""></Section>
    </div>
  );
}

export default Content;
