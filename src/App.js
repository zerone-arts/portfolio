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
  const [bgWidth, setBgWidth] = useState(50);
  const [contactBg, setContactBg] = useState("");
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

  function onScroll() {
    if (window.scrollY <= 300) {
      setBgWidth(50);
    } else {
      setBgWidth(0);
    }

    if (contactObserveRef.current?.getBoundingClientRect().top <= 100) {
      setContactBg("white");
    } else {
      setContactBg("");
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
      className={`App ${toggle} ${contactBg}`}
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
        contactBg={contactBg}
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
      <Mouse xy={xy} hover={hover} click={click} contactBg={contactBg} />
      <div className="contact-observe" ref={contactObserveRef}></div>
    </div>
  );
}

export default App;
