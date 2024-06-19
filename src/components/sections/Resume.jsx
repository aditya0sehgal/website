import { Viewer, Worker, ProgressBar } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"
import { toolbarPlugin } from "@react-pdf-viewer/toolbar"
import { themePlugin } from "@react-pdf-viewer/theme"
import { ThemeContext } from "@react-pdf-viewer/core"
import { SelectionMode } from "@react-pdf-viewer/selection-mode"
import "@react-pdf-viewer/toolbar/lib/styles/index.css"
import resume from "../../assets/resume.pdf"
import { Card } from "react-bootstrap"
import { useEffect, useState } from "react"

// https://react-pdf-viewer.dev/plugins/toolbar/

function Resume({ theme }) {
  const [currentTheme, setCurrentTheme] = useState(theme)

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme])

  const themeContext = { currentTheme, setCurrentTheme }

  const toolbarPluginInstance = toolbarPlugin({
    getFilePlugin: {
      fileNameGenerator: (file) => {
        const fileName = file.name.substring(file.name.lastIndexOf("/") + 1)
        return `Aditya Sehgal-${fileName}`
      },
    },
    selectionModePlugin: {
      selectionMode: SelectionMode.Hand,
    },
  })
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance
  const themePluginInstance = themePlugin()
  const transform = (slot) => ({
    ...slot,
    // These slots will be empty
    SwitchTheme: () => <></>,
  })
  return (
    <Card
      className={
        `content ` +
        (theme === "light" ? "text-dark " : "text-light ") +
        `bg-${theme}`
      }
      id="cardeffect"
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          className={`rpv-core__viewer rpv-core__viewer--${currentTheme}`}
          style={{
            borderColor:
              currentTheme === "dark" ? "rgba(0, 0, 0, 0.3)" : "#454647",
          }}
        >
          <ThemeContext.Provider value={themeContext}>
            <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
            <Viewer
              fileUrl={resume}
              theme={currentTheme}
              plugins={[toolbarPluginInstance, themePluginInstance]}
              renderLoader={(percentages) => (
                <div style={{ width: "240px" }}>
                  <ProgressBar progress={Math.round(percentages)} />
                </div>
              )}
            />
          </ThemeContext.Provider>
        </div>
      </Worker>
    </Card>
  )
}
export default Resume
