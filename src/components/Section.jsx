function Section({ section, children }) {
  return (
    <div className="section container" id={section}>
      <h1>{section}</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
      dolor sit amet consectetur adipisicing elit. Veritatis neque obcaecati
      deserunt autem, laborum culpa sunt vero. 
      dolor sit amet consectetur adipisicing elit. Veritatis neque obcaecati
      deserunt autem, laborum culpa sunt vero. 
      <br />
        {children}
      <br />
    </div>
  );
}

export default Section;
