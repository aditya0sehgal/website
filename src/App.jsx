import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <Content theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
