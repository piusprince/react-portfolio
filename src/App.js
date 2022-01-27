import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import profile from "./images/profile1.webp";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

const ProjectsPage = lazy(() => import("./pages/ProjectsPage/ProjectsPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage/ServicesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));

function App() {
  return (
    <Suspense fallback={<h2>Loading page</h2>}>
      <Router>
        <Navbar profile={profile} />

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

          <Route path="/services">
            <ServicesPage />
          </Route>
        </Switch>

        <Footer profile={profile} />
      </Router>
    </Suspense>
  );
}

export default App;
