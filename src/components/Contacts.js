import React, { Component } from "react";
import Contact from './Contact';
class Contacts extends Component{
	constructor() {
		super();
		this.state = {
			contacts: [
				{
					id: 1,
					name: 'C Puneeth',
					email: 'puneethchoppanati@gmail.com',
					phone: '999-999-9999'
				},
				{
					id: 2,
					name: 'John Doe',
					email: 'jdoe@gmail.com',
					phone: '111-999-9999'
				},
				{
					id: 3,
					name: 'Katie Johnson',
					email: 'janedoe@gmail.com',
					phone: '222-999-9999'
				}
			]
		};
	}
	// We pass this function to the Contact as a prop so we could make that call
	deleteOnClickHandler = id => {
		const { contacts } = this.state;
		const newContacts = contacts.filter(contact => contact.id !== id);
		this.setState({contacts : newContacts});
	}
	render() {
		const { contacts } = this.state;
		return (
			<div>
				{
					contacts.map(contact => 
						<Contact
							key={ contact.id }
							contact={contact}
							deleteOnClickHandler = {this.deleteOnClickHandler}
						/>
						)
				}
			</div>
		);
	}
}
export default Contacts;