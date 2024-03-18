import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { useEffect, useState } from "react";
import MenuPage from "./pages/MenuPage/MenuPage";

function App() {
  const [toggle, setToggle] = useState("");
  const [selectCategory, setSelectCategory] = useState("");

  console.log(selectCategory);

  useEffect(() => {
    setToggle("");
  }, [selectCategory]);
  return (
    <div className={`App ${toggle}`}>
      <Header
        toggle={toggle}
        setToggle={setToggle}
        setSelectCategory={setSelectCategory}
      />
      <MainPage selectCategory={selectCategory} />
      <AboutPage selectCategory={selectCategory} />
      <ProjectPage selectCategory={selectCategory} />
      <ContactPage selectCategory={selectCategory} />
      <MenuPage
        toggle={toggle}
        setToggle={setToggle}
        setSelectCategory={setSelectCategory}
      />
    </div>
  );
}

export default App;
