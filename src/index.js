// 2301-FTB-MT-WEB-FT-REACT-ROUTING-PART-2 continue @ 40:00 adding a href to the name


import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import React from 'react';
import {useState, useEffect} from 'react';
import PuppyList from './components/PuppyList';
import SinglePuppy from './components/SinglePuppy';
// import { PuppyList, SinglePuppy } from './components';
 
const App = () => {

    const [players, setPlayers] = useState([]);
  
    const fetchPlayersData = async () => {
  // async function fetchPlayersData() {
        try {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players");
            const translatedPlayers = await response.json();
            console.log(translatedPlayers);
            setPlayers(translatedPlayers.data.players);
        }   catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPlayersData();
    }, []);


    return(
        <BrowserRouter>
            <header>
                <div className='title'>PuppyBowl 2023</div>
            </header>

            <nav className="nav">
                <Link to="/playerlist" className="nav-box-1">Player List</Link>
            </nav>

            <div className='container'>
                <Routes>
                    <Route path="/playerlist" element= {<PuppyList playerProps={players}/>}/>
                    <Route path="/player/:id" element= {<SinglePuppy playerProps={players}/>}/>
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