import { useEffect, useState } from "react"
import DescriptionCard from "../DescriptionCard"
import Papa from "papaparse"

function WorkExperience({ theme }) {
  const [workEx, setWorkEx] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProjects = async () => {
    // Replace the below URL with your Google Sheets CSV link
    const googleSheetUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL

    await Papa.parse(googleSheetUrl, {
      download: true,
      header: true,
      complete: (results) => {
        "results:", results.data
        const formattedWorkEx = results.data
          .filter((exp) => exp.Company !== "")
          .map((exp) => ({
            title: exp.Title,
            subtitle: exp.Company || "",
            date: exp.Date,
            description: exp.Description.split("; "),
            techStack: exp.TechStack.split("; "),
            link: exp.Link,
            location: exp.Location,
          }))
        setWorkEx(formattedWorkEx)
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
        workEx.map((job, index) => (
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
        ))
      )}
    </>
  )
}

export default WorkExperience
