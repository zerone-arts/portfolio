import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </div>
  );
}

export default App;
