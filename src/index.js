import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import Main from "./components/Main";
 
const App = () => {
    return(
        <BrowserRouter>
            <header>
                <div className='title'>PuppyBowl 2023</div>
            </header>

            <nav className="nav">
                {/* <Link to="/training" className="nav-box-1">Training</Link>
                <Link to="/portfolio" className="nav-box-2">Portfolio</Link>
                <Link to="/resume" className="nav-box-3">Resume</Link>
                <Link to="/contact" className="nav-box-4">Contact</Link> */}
            </nav>
            <div className='container'>
                <Routes>
                    <Route path="/" element= {<Main />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

const appElement = document.getElementById("app");
const root = createRoot (appElement);
root.render (<App />)


                   {/* <Route path="/training" element={<TrainingBody/>}/>
                    <Route path="/portfolio" element={<PortfolioBody/>}/>
                    <Route path="/resume" element={<ResumeBody/>}/>
                    <Route path="contact" element={<ContactBody/>}/> */}