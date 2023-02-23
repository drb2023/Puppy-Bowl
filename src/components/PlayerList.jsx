import { Link } from 'react-router-dom';
import { useState } from 'react';

const PlayerList = (props) => {
    const { playerProps } = props;

    const [searchQuery, setSearchQuery] = useState("");

    let filteredPlayer = playerProps.filter((singlePlayerElement) => {
        let lowercasedName = singlePlayerElement.name.toLowerCase(); 
        // console.log(lowercasedName)

        return lowercasedName.includes(searchQuery.toLowerCase())
    })

    return (
        <div>
            <h2 className="champs">Puppy Players</h2>

            <input className="searchbox"
                type="text"
                placeholder="Search here..."
                onChange={(event) => {
                        setSearchQuery(event.target.value)
                }}
            >
            </input>
            
            <section className=''>
            {
                filteredPlayer.length ? filteredPlayer.map((singlePlayerElement, idx) => {
                    return (
                        <div key={idx}>
                            <p className='dogname'>Name: {singlePlayerElement.name}</p>

                            <Link to={`/player/${idx}`}>{singlePlayerElement.name}'s Details
                            </Link>
                        </div>
                    )
                }) : <div> No player matching your request. Try Agin</div>    
            }
            </section>
        </div>
    )
}
export default PlayerList;