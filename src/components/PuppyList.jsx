import { Link } from 'react-router-dom';

const PuppyList = (props) => {
    return (
        <div>
            <h2>All Puppies</h2>

            {
                props.playerProps.length ? props.playerProps.map((singlePlayerElement, idx) => {
                    return (
                        <div>
                            <p key={idx}>Name: {singlePlayerElement.name}</p>
                            <Link to={`/player/${idx}`}>
                                {singlePlayerElement.name}
                            </Link>
                        </div>
                    )
                }) : <div> No data yet...</div>    
            }

        </div>
    )
}
export default PuppyList;

// {
//     props.contacts.map((contact) => {
//     return <ContactRow key = {contact.id} contact = {contact} selectContact = {props.selectContact}/>
//     })}



// <table>
// <tbody>
//   <tr>
//     <th>Name</th>
//     <th>Phone</th>
//     <th>Email</th>
//   </tr>
//   {
//       props.puppies.map(puppy => {
//           return <PuppyRow key={puppy.id} puppy={puppy} selectPuppy={props.selectPuppy}/>
//       })
//   }
// </tbody>
// </table>