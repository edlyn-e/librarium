// importing software
import { BrowserRouter, Routes, Route } from "react-router-dom";

// local folders
import Nav from "./containters/Nav/Nav";
import About from "./containters/About/About";
import Footer from "./components/Footer";
import Landing from "./containters/Landing/Landing";

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
                    <Route path="/tech-stacks" element={<h1>Tech Stacks</h1>} />
                    <Route path="/projects" element={<h1>My projects</h1>} />
                    <Route
                        path="/contact-me"
                        element={<h1>Let's get in touch!</h1>}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
