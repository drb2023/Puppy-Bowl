
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import { useState, useEffect} from 'react';
import { Home, PlayerList, SinglePlayer } from './components';
 
const App = () => {

    const [player, setPlayer] = useState([]);
  
    const fetchplayerData = async () => {
        try {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players");
            const translatedPlayers = await response.json();
            console.log(translatedPlayers);
            setPlayer(translatedPlayers.data.players);
            console.log(player)
        }   catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchplayerData();
    }, []);


    return(
        <BrowserRouter>
            <header className="header">
                <div className='title'>PuppyBowl 2023</div>
            </header>

            <nav className="nav">
                <button><Link to="/playerlist" className="nav-box-1">Player List</Link></button>
            </nav>

            <div className="container">
                <Routes>
                    <Route path="/" element= {<Home playerProps={player}/>}/>
                    <Route path="/playerlist" element= {<PlayerList playerProps={player}/>}/>
                    <Route path="/player/:id" element= {<SinglePlayer playerProps={player}/>}/>
                </Routes>
            </div>

            <footer className="footer">
                <div className='title'></div>
            </footer>
        </BrowserRouter>
    )
}

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App />)