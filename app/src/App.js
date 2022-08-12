// library imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// local folders
import Nav from "./containters/Nav/Nav";
import About from "./containters/About/About";
import Footer from "./components/Footer";
import Landing from "./containters/Landing/Landing";
import { TechStacks } from "./containters/TechStacks/TechStacks";
import Projects from "./containters/Projects";
import Contact from "./containters/Contact/Contact";
import Resume from "./containters/Resume/Resume";

// styles
import styles from "./App.module.scss";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about-me" element={<About />} />
                    <Route path="/tech-stacks" element={<TechStacks />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact-me" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
