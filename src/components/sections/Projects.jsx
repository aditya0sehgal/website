import DescriptionCard from "../DescriptionCard";

function Projects({ theme }) {
  const projects = [
    {
      title: "Technical Resume Builder",
      date: "June 2022 – October 2022",
      description: [
        "Developed a user-friendly website to simplify the creation of professional technical resumes, reducing the average time spent on resume creation from 2+ hours to minutes.",
        "Implemented a streamlined form that takes section-wise user inputs and utilizes the jsPDF library to produce visually appealing and well-formatted PDF resumes, providing consistent formatting overall.",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "jsPDF"],
      link: "https://aditya0sehgal.github.io/technical-resume-builder",
    },
    {
      title: "Voice Prescription",
      date: "February 2021 – March 2021",
      description: [
        "Led a 5-member team to create an intuitive web user interface allowing doctors to generate prescriptions by naturally conversing with patients, resulting in a 40% reduction in prescription generation time compared to traditional methods.",
        "Utilized NLP models to track specific keywords in speech, resulting in a 25% increase in keyword-capturing accuracy.",
        "Achieved robust security measures through Virtru email encryption, safeguarding patient data and ensuring HIPAA compliance for confidential prescription delivery via email.",
      ],
      techStack: ["HTML5", "JavaScript", "Python", "Virtru"],
      link: "https://github.com/aditya0sehgal/Doctors-Prescription",
    },
    {
      title: "CareNet",
      date: "November 2020 – May 2021",
      description: [
        "Coded a React.js and Flask application to detect Diabetes and Pneumonia by leveraging machine learning techniques.",
        "Coordinated and built a health score feature, allowing patients to receive personalized health parameter scores, ranging from 0 to 100, based on crucial factors such as height, BMI, sleep patterns, glucose levels, etc.",
        "Created a recommendation engine to provide patients with suggestions to improve health parameters by 10–15 points and get parameters within the recommended range, resulting in healthier lifestyles.",
      ],
      techStack: [
        "React.js",
        "Flask",
        "MongoDB",
        "HTML5",
        "Pandas",
        "TensorFlow",
      ],
      link: "https://github.com/aditya0sehgal/CareNet",
    },
    {
      title: "MS Dhoni ODI Stat Analysis",
      date: "January 2023",
      description: [
        "Analyzed a dataset of cricket ODI matches played by M.S. Dhoni and derived interesting insights such as most runs scored against Sri Lanka and the number of innings he finished not out.",
      ],
      techStack: ["Python", "NumPy", "Pandas"],
      link: "",
    },
    {
      title: "NewsReader App",
      date: "December 2022",
      description: [
        "Developed a mobile app providing the latest global news with filters for different categories.",
        "Implemented Text-to-Speech functionality to read news items aloud at the user's request.",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Ionic Framework"],
      link: "",
    },
    {
      title: "Hindi-Scraper",
      date: "November 2022",
      description: [
        "Created a Python script to scrape website text, perform analysis, and identify Hindi text, outputting only Hindi text lines.",
      ],
      techStack: ["Python", "BeautifulSoup"],
      link: "",
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <DescriptionCard
          key={index}
          title={project.title}
          subtitle={project.subtitle || ""}
          date={project.date}
          description={project.description}
          techStack={project.techStack}
          link={project.link}
          theme={theme}
        />
      ))}
    </>
  );
}

export default Projects;
