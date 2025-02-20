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
import { useDispatch, useSelector } from "react-redux";
import {
  setBgColor,
  setLocation,
  setScreenWidth,
  setToggle,
} from "./redux/reducers/uiSlice";

function App() {
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const [click, setClick] = useState(false);
  const [color, setColor] = useState("");
  const [projectHover, setProjectHover] = useState(false);
  const contactObserveRef = useRef(null);
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.ui.toggle);
  const screenWidth = useSelector((state) => state.ui.screenWidth);
  const location = useSelector((state) => state.ui.location);
  const bgColor = useSelector((state) => state.ui.bgColor);

  const mouseMoveHandle = (e) => {
    setXY({ x: e.clientX, y: e.clientY });
  };
  const handleResize = () => {
    dispatch(setScreenWidth(window.innerWidth));

    if (
      window.innerWidth >= 800 &&
      toggle === "active" &&
      screenWidth != null
    ) {
      dispatch(setToggle(""));
    }
  };

  const handleBgColor = (e) => {
    dispatch(setBgColor(e));
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
      dispatch(setLocation("about"));
    } else if (
      window.scrollY >= viewHeight * 2 - viewHeight / 2 &&
      window.scrollY <= viewHeight * 3 - viewHeight / 2
    ) {
      dispatch(setLocation("project"));
    } else if (window.scrollY >= viewHeight * 3 - viewHeight / 2) {
      dispatch(setLocation("contact"));
    } else {
      dispatch(setLocation("main"));
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
        dispatch(setBgColor(""));
        break;
      case "about":
        dispatch(setBgColor("deepblue"));
        break;
      case "project":
        dispatch(setBgColor(""));
        break;
      case "contact":
        dispatch(setBgColor(""));
        break;
      default:
        dispatch(setBgColor(""));
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
      <Header color={color} />
      <MainPage ref={mainRef} />
      <AboutPage ref={aboutRef} handleBgColor={handleBgColor} />
      <ProjectPage ref={projectRef} handleProjectHover={handleProjectHover} />
      <ContactPage ref={contactRef} handleProjectHover={handleProjectHover} />
      <MenuPage />
      <Footer setColor={setColor} />
      <Mouse xy={xy} click={click} color={color} />
      <div className="contact-observe" ref={contactObserveRef}></div>
    </div>
  );
}

export default App;
