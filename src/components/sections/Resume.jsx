import { Viewer, Worker, ProgressBar } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { SelectionMode } from "@react-pdf-viewer/selection-mode";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import resume from "../../assets/resume.pdf";
import { Card } from "react-bootstrap";

// https://react-pdf-viewer.dev/plugins/toolbar/

function Resume({ theme }) {
  const toolbarPluginInstance = toolbarPlugin({
    getFilePlugin: {
      fileNameGenerator: (file) => {
        const fileName = file.name.substring(file.name.lastIndexOf("/") + 1);
        return `Aditya Sehgal-${fileName}`;
      },
    },
    selectionModePlugin: {
      selectionMode: SelectionMode.Hand,
    },
  });
  const { Toolbar } = toolbarPluginInstance;
  return (
    <Card
      className={
        `content ` +
        (theme === "light" ? "text-dark " : "text-light ") +
        `bg-${theme}`
      }
      style={{
        width: "80vw",
        height: "auto",
        boxShadow: "2.5px 2.5px 3px 3px lightblue",
        padding: "1%",
      }}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div>
          {/* Toolbar */}
          <Toolbar />
          <Viewer
            fileUrl={resume}
            plugins={[toolbarPluginInstance]}
            renderLoader={(percentages) => (
              <div style={{ width: "240px" }}>
                <ProgressBar progress={Math.round(percentages)} />
              </div>
            )}
          />
        </div>
      </Worker>
    </Card>
  );
}
export default Resume;
