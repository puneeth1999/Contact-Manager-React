import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Contact extends Component {
	state = {
		showContactInfo: false
	}
	// Toggle the contact info
	onShowClick = e => {
		this.setState({showContactInfo : !this.state.showContactInfo});
	};
	
	// deleteOnClick - calls the prop function
	deleteOnClick = (id) => {
		this.props.deleteOnClickHandler(id);
	}
	render() {
		const { contact } = this.props;
		const { name, email, phone } = contact;
		return (
			<div className='card card-body mb-3'>
				<div style={{display:'inline'}}>
					<h4>{name}{' '}
						<button
							style={{ fontSize:'17px', color: 'white', background:'white', border: 'white', borderRadius: '4px'}}
							onClick={this.onShowClick}>
							<i className="fas fa-sort-down" style={{ color: 'red', cursor: 'pointer' }}/>
						</button>
					</h4>
					<button style={{background:'white', border:'None', float: 'right'}} onClick={this.deleteOnClick.bind(this, contact.id)}>
						<i className="fas fa-times" style={{ color: 'red', cursor: 'pointer' }}/>
					</button>
				</div>
				
				{
					this.state.showContactInfo ?
						(
							<ul className='list-group'>
								<li className='list-group-item'>E-mail: {email}</li>
								<li className='list-group-item'>Phone: {phone}</li>
							</ul>
						) : null}
			</div>
		);
	}
}
// PropTypes - TypeChecking
Contact.propTypes = {
	contact: PropTypes.object.isRequired
}
export default Contact;