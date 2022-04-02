import { React, useState } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import profile from "./images/profile1.webp";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";
import pMinDelay from "p-min-delay";

const ProjectsPage = lazy(() =>
  pMinDelay(import("./pages/ProjectsPage/ProjectsPage"), 5000)
);

const AboutPage = lazy(() =>
  pMinDelay(import("./pages/AboutPage/AboutPage"), 5000)
);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Navbar
          profile={profile}
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />
        {isOpen && <Sidebar />}

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/about">
            <AboutPage />
          </Route>

          <Route path="/projects">
            <ProjectsPage />
          </Route>
        </Switch>

        <Footer profile={profile} />
      </Router>
    </Suspense>
  );
}

export default App;
