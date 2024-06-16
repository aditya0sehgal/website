function Section({ section, children }) {
  return (
    <div id={section}>
      <div className="container section">
        {section !== "About Me" && <h1>{section}</h1>}
        <br />
        {children}
        <br />
        <br />
      </div>
    </div>
  );
}

export default Section;
