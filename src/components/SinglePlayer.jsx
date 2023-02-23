import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SinglePlayer = (props) => {
    const { id } = useParams();
    const { playerProps } = props;

    const mySelectedPlayer = playerProps[id];

    return (
        <div className='deets'>
            <p className='champs'>Details about your selected athlete</p>
            <p>Name: {mySelectedPlayer.name}</p>
            <p>Breed: {mySelectedPlayer.breed}</p>
            <p>ID: {mySelectedPlayer.id}</p>
            <p>Status: {mySelectedPlayer.status}</p>
            <p>Image: {mySelectedPlayer.imageUrl}</p>  
            <p>Team: {mySelectedPlayer.teamId}</p>
            <p>Cohort: {mySelectedPlayer.cohortId}</p>  
            <button><Link to="/playerlist">Return</Link></button>
        </div>
    )
}
export default SinglePlayer;