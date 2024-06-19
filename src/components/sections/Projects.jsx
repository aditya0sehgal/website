import { useEffect, useState } from "react"
import DescriptionCard from "../DescriptionCard"
import Papa from "papaparse"

function Projects({ theme }) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProjects = async () => {
    // Replace the below URL with your Google Sheets CSV link
    const googleSheetUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL

    await Papa.parse(googleSheetUrl, {
      download: true,
      header: true,
      complete: (results) => {
        "results:", results.data
        const formattedProjects = results.data
          .filter((project) => project.Company === "")
          .map((project) => ({
            title: project.Title,
            subtitle: project.Company || "",
            date: project.Date,
            description: project.Description.split("; "),
            techStack: project.TechStack.split("; "),
            link: project.Link,
            location: project.Location,
          }))
        setProjects(formattedProjects)
      },
    })
    setLoading(false)
  }

  useEffect(() => {
    // Replace the below URL with your Google Sheets CSV link
    fetchProjects()
  }, [])

  return (
    <>
      {loading ? (
        <>Loading ...</>
      ) : (
        projects.map((project, index) => (
          <DescriptionCard
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            date={project.date}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            theme={theme}
          />
        ))
      )}
    </>
  )
}

export default Projects
