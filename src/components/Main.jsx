import React from 'react';
import {useState, useEffect} from 'react';
import PuppyList from './PuppyList';
import SinglePuppy from './SinglePuppy';

const Main = () => {
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


    return (
            <div>
                {
                    players.length ? players.map((singlePlayerElement, id) => {
                        return (
                            <div>
                                <p key={id}>Name: {singlePlayerElement.name}</p>
                            </div>
                        )
                    }) : <div> No data yet...</div>    
                }
            </div>  
    );
};



export default Main;





// {
//     !selectedContact.id ? <ContactList contacts = {contacts} selectContact = {selectContact}/> : <SingleContact selectedContact = {selectedContact}/>
//   }

  // const [selectedPuppy, setSelectedPuppy] = useState({});

    // const selectPuppy = async (puppyId) => {
    //     const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players/${id}')
    //     const translatedPuppy = await response.json();
    //     console.log(translatedPuppy);
    //     setSelectedPuppy(translatedPuppy);
    // }

          // selectPuppy();