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
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [location, setLocation] = useState("main");
  const contactObserveRef = useRef(null);
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const mouseMoveHandle = (e) => {
    setXY({ x: e.clientX, y: e.clientY });
  };
  const handleResize = () => {
    setScreenWdith(window.innerWidth);

    if (window.innerWidth >= 800 && toggle == "active" && screenWidth != null) {
      setToggle("");
    }
  };

  console.log(location);

  const handleScroll = () => {
    // let mainScroll = mainRef.current?.getBoundingClientRect().bottom;
    // let aboutScroll = aboutRef.current?.getBoundingClientRect().bottom;
    // let projectScroll = projectRef.current?.getBoundingClientRect().bottom;
    // let contactScroll = contactRef.current?.getBoundingClientRect().bottom;

    // let pageHeight = document.documentElement.scrollHeight - 200;
    let viewHeight = window.innerHeight;

    if (
      window.scrollY >= viewHeight - viewHeight / 2 &&
      window.scrollY <= viewHeight * 2 - viewHeight / 2
    ) {
      setLocation("about");
    } else if (
      window.scrollY >= viewHeight * 2 - viewHeight / 2 &&
      window.scrollY <= viewHeight * 3 - viewHeight / 2
    ) {
      setLocation("project");
    } else if (window.scrollY >= viewHeight * 3 - viewHeight / 2) {
      setLocation("contact");
    } else {
      setLocation("main");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  useEffect(() => {
    switch (location) {
      case "main":
        setBgColor("");
        break;
      case "about":
        setBgColor("deepblue");
        break;
      case "project":
        setBgColor("black");
        break;

      default:
        setBgColor("");
        break;
    }
  }, [location]);

  useEffect(() => {
    if (bgColor === "") {
      setColor("");
    } else {
      setColor("white");
    }
  }, [bgColor]);

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
      <div className={`app-bg-black ${bgColor}`}></div>

      <Header
        toggle={toggle}
        setToggle={setToggle}
        setSelectCategory={setSelectCategory}
        setHover={setHover}
        color={color}
      />
      <MainPage
        selectCategory={selectCategory}
        ref={mainRef}
        location={location}
      />
      <AboutPage
        selectCategory={selectCategory}
        setHover={setHover}
        ref={aboutRef}
      />
      <ProjectPage
        selectCategory={selectCategory}
        setHover={setHover}
        ref={projectRef}
      />
      <ContactPage selectCategory={selectCategory} ref={contactRef} />
      <MenuPage
        toggle={toggle}
        setToggle={setToggle}
        setSelectCategory={setSelectCategory}
        setHover={setHover}
      />
      <Footer setSelectCategory={setSelectCategory} setHover={setHover} />
      <Mouse xy={xy} hover={hover} click={click} color={color} />
      <div className="contact-observe" ref={contactObserveRef}></div>
    </div>
  );
}

export default App;
