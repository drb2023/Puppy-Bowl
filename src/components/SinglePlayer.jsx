
import { useParams } from 'react-router-dom';

const SinglePlayer = (props) => {
    const { id } = useParams();
    const { playerProps } = props;
    const mySelectedPlayer = playerProps[id];

    return (
        <div className='deets'>
                <p className='champs'>Athlete Details</p>
                <p>Name: {mySelectedPlayer.name}</p>
                <p>Breed: {mySelectedPlayer.breed}</p>
                <p>Status: {mySelectedPlayer.status}</p> 
                <p>ID: {mySelectedPlayer.id},  Team: {mySelectedPlayer.teamId},  Cohort: {mySelectedPlayer.cohortId}</p>
                <img src={mySelectedPlayer.imageUrl} alt="Player Picture" className='pics sp-pic'></img>
        </div>
    )
}
export default SinglePlayer;