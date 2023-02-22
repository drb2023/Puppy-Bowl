import React from 'react';

const PuppyRow = props => {
    return (<tr onClick={() => props.selectPuppy(props.puppy.id)}>
                <td>{props.puppy.id}</td>
                <td>{props.puppy.name}</td>
                <td>{props.puppy.breed}</td>
                <td>{props.puppy.status}</td>
                <td>{props.puppy.imageUrl}</td>
                <td>{props.puppy.teamId}</td>
                <td>{props.puppy.cohortId}</td>
            </tr>);
}

export default PuppyRow;