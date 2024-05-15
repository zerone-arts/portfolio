import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { useEffect, useRef, useState } from "react";
import MenuPage from "./pages/MenuPage/MenuPage";
import Mouse from "./components/Mouse/Mouse";
import Footer from "./pages/Footer/Footer";

function App() {
  const [toggle, setToggle] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState("");
  const [screenWidth, setScreenWdith] = useState(null);
  const [click, setClick] = useState(false);

  const contactObserveRef = useRef(null);

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
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function onScroll() {}

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
      <Header
        toggle={toggle}
        setToggle={setToggle}
        setSelectCategory={setSelectCategory}
        setHover={setHover}
      />
      <MainPage selectCategory={selectCategory} />
      <AboutPage selectCategory={selectCategory} setHover={setHover} />
      <ProjectPage selectCategory={selectCategory} setHover={setHover} />
      <ContactPage selectCategory={selectCategory} />
      <MenuPage
        toggle={toggle}
        setToggle={setToggle}
        setSelectCategory={setSelectCategory}
        setHover={setHover}
      />
      <Footer setSelectCategory={setSelectCategory} setHover={setHover} />
      <Mouse xy={xy} hover={hover} click={click} />
      <div className="contact-observe" ref={contactObserveRef}></div>
    </div>
  );
}

export default App;
