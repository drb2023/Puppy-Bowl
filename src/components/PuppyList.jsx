const PuppyList = (props) => {
    return (
        <div>
            <ol>
                <li>Placeholder</li>
            </ol>
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