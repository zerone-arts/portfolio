import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { useEffect, useRef, useState } from "react";
import MenuPage from "./pages/MenuPage/MenuPage";
import Mouse from "./components/Mouse/Mouse";

function App() {
  const [toggle, setToggle] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState("");
  const [screenWidth, setScreenWdith] = useState(null);
  const [click, setClick] = useState(false);
  const [bgWidth, setBgWidth] = useState(50);

  const mouseMoveHandle = (e) => {
    setXY({ x: e.clientX, y: e.clientY });
  };
  const handleResize = () => {
    setScreenWdith(window.innerWidth);

    if (window.innerWidth >= 800 && toggle == "active" && screenWidth != null) {
      setToggle("");
    }
  };

  useEffect(() => {
    setToggle("");
  }, [selectCategory]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function onScroll() {
    if (window.scrollY <= 300) {
      setBgWidth(50);
    } else {
      setBgWidth(0);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`App ${toggle}`}
      onMouseMove={(e) => mouseMoveHandle(e)}
      onMouseDown={() => {
        setClick(true);
      }}
      onMouseUp={() => {
        setClick(false);
      }}
    >
      <div className="app-blackBg" style={{ width: `${bgWidth}%` }}></div>
      <Header
        toggle={toggle}
        setToggle={setToggle}
        setSelectCategory={setSelectCategory}
        setHover={setHover}
        bgWidth={bgWidth}
      />
      <MainPage selectCategory={selectCategory} />
      <AboutPage selectCategory={selectCategory} setHover={setHover} />
      <ProjectPage selectCategory={selectCategory} />
      <ContactPage selectCategory={selectCategory} />
      <MenuPage
        toggle={toggle}
        setSelectCategory={setSelectCategory}
        setHover={setHover}
      />
      <Mouse xy={xy} hover={hover} click={click} />
    </div>
  );
}

export default App;
