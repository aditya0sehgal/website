import DescriptionCard from "../DescriptionCard";

function WorkExperience({ theme }) {
  const workExperience = [
    {
      title: "Teaching Assistant - Data 101",
      subtitle: "Rutgers University, Department of Computer Science",
      date: "September 2023 – Present",
      description: [
        "Engaged with students individually and in small groups to provide academic support, clarify concepts, and address questions.",
        "Assisted 25 students to perform data analysis using R to extract meaningful insights and make data-driven decisions.",
      ],
      location: "New Brunswick, NJ",
    },
    {
      title: "Software Engineer Intern",
      subtitle: "Rutgers University, Department of Computer Science",
      date: "June 2023 – Present",
      description: [
        "Took charge of hosting the online interactive textbook for the 'Data-101' course, which has over 40,000 monthly hits.",
        "Developed a web application that reads an inputted dataset and auto-generates 100s of rows of ‘R’ coding questions, answers, and accompanying template-based code for 5+ templates, guiding understanding of statistics.",
        "Designed a question roulette feature with hints for answer code that can run in an in-browser ‘R’ coding environment, enhancing the data science learning and practicing experience for 200+ students.",
      ],
      techStack: [
        "Python",
        "Flask",
        "JavaScript",
        "R",
        "Pandas",
        "Rest APIs",
        "ChatGPT",
        "DataCamp Light",
      ],
      location: "New Brunswick, NJ",
      link: "http://tinyurl.com/data101-roulette",
    },
    {
      title: "Full Stack Engineering Analyst",
      subtitle: "Accenture Solutions Private Limited",
      date: "June 2021 – June 2022",
      description: [
        "Optimized the Front-end web user experience for a client in the health-care space using complete and partial member search input filters, resulting in a 30% quicker member search process.",
        "Collaborated on developing a Spring Boot back-end, leveraging the power of Azure Cognitive Search, resulting in 40% performance improvements in querying the CosmosDB database.",
        "Managed the migration of several member records from paper-based to PDF attestations, resulting in significant cost savings and environmental benefits.",
        "Voted the 'Best New Employee' out of a team of 15+ employees for having good client-handling skills.",
      ],
      techStack: [
        "Angular.js",
        "JavaScript",
        "Java",
        "Spring Boot",
        "Azure Cognitive Search",
        "CosmosDB",
      ],
      location: "Mumbai, India",
    },
  ];

  return (
    <>
      {workExperience.map((job, index) => (
        <DescriptionCard
          key={index}
          title={job.title}
          subtitle={job.subtitle}
          date={job.date}
          description={job.description}
          techStack={job.techStack}
          location={job.location}
          link={job.link}
          theme={theme}
        />
      ))}
    </>
  );
}

export default WorkExperience;
