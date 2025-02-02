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
  const [projectHover, setProjectHover] = useState(false);
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

    if (
      window.innerWidth >= 800 &&
      toggle === "active" &&
      screenWidth != null
    ) {
      setToggle("");
    }
  };

  const handleBgColor = (e) => {
    setBgColor(e);
  };

  const handleProjectHover = (e) => {
    setProjectHover(e);
  };

  const handleScroll = () => {
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
        setBgColor("");
        break;
      case "contact":
        setBgColor("");
        break;
      default:
        setBgColor("");
        break;
    }
  }, [location]);

  useEffect(() => {
    if (bgColor === "") {
      if (projectHover) {
        setColor("white");
      } else {
        setColor("");
      }
    } else {
      setColor("white");
    }
  }, [bgColor, location, projectHover]);

  // useEffect(() => {
  //   const scrollToSection = (ref) => {
  //     if (ref?.current) {
  //       ref.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center", // 섹션이 화면 중앙에 오도록 설정
  //       });
  //     }
  //   };

  //   switch (location) {
  //     case "main":
  //       scrollToSection(mainRef);
  //       break;
  //     case "about":
  //       scrollToSection(aboutRef);
  //       break;
  //     case "project":
  //       scrollToSection(projectRef);
  //       break;
  //     case "contact":
  //       scrollToSection(contactRef);
  //       break;
  //     default:
  //       break;
  //   }
  // }, [location]); // location이 바뀔 때마다 실행

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
        bgColor={bgColor}
        color={color}
        location={location}
      />
      <MainPage
        selectCategory={selectCategory}
        ref={mainRef}
        location={location}
      />
      <AboutPage
        selectCategory={selectCategory}
        ref={aboutRef}
        location={location}
        handleBgColor={handleBgColor}
      />
      <ProjectPage
        selectCategory={selectCategory}
        setHover={setHover}
        ref={projectRef}
        handleProjectHover={handleProjectHover}
        location={location}
      />
      <ContactPage
        selectCategory={selectCategory}
        ref={contactRef}
        handleProjectHover={handleProjectHover}
      />
      <MenuPage
        toggle={toggle}
        setToggle={setToggle}
        setSelectCategory={setSelectCategory}
        setHover={setHover}
      />
      <Footer setSelectCategory={setSelectCategory} setHover={setHover} />
      <Mouse
        xy={xy}
        hover={hover}
        toggle={toggle}
        click={click}
        color={color}
      />
      <div className="contact-observe" ref={contactObserveRef}></div>
    </div>
  );
}

export default App;
