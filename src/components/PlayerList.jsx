
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PlayerList = (props) => {
    const { playerProps } = props;

    const [searchQuery, setSearchQuery] = useState("");

    let filteredPlayer = playerProps.filter((singlePlayerElement) => {
        let lowercasedName = singlePlayerElement.name.toLowerCase(); 

        return lowercasedName.includes(searchQuery.toLowerCase())
    })

    return (
        <div className='ppcontainer'>
            <h2 className="champs">Barkalotamus Team Members</h2>

            <input className="searchbox"
                type="text"
                placeholder="Search member name..."
                onChange={(event) => {
                        setSearchQuery(event.target.value)
                }}
            >
            </input>
            <br/>
            <section>
                {
                    filteredPlayer.length ? filteredPlayer.map((singlePlayerElement, idx) => {
                        return (
                            <div key={idx} className="dogname">
                                <br/>
                                <img src={singlePlayerElement.imageUrl} alt="Player Picture" className='pl-pic'></img>
                                <p>Name: {singlePlayerElement.name}</p>
                                <Link to={`/player/${idx}`}>See {singlePlayerElement.name}'s Details</Link>
                                <br/>
                                <br/>                             
                            </div>
                        )
                    }) : <div> No player matching your request. Try Agin</div>    
                }
            </section>
        </div>
    )
}
export default PlayerList;