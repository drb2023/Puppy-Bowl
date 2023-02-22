import { useParams } from 'react-router-dom';

const SinglePuppy = (props) => {
    const { id } = useParams();
    console.log(props.playerProps[id]);
    return (
        <div>
            {/* <p>Name: {props.playerProps[id].name}</p> */}
        </div>
    )
}
export default SinglePuppy;

