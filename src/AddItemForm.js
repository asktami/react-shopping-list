import React from 'react';

export default class AddItemForm extends React.Component {
	// handle click on form submit button, passing current input value to props.onAddItem function
	onSubmitForm = e => {
		e.preventDefault();
		// alert(e.target.itemToAdd.value);
		// event.target['inputName'] = `<input name='inputName' />`
		// is referred to as itemName in App.js
		this.props.onAddItem(e.target.itemToAdd.value);

		// clear input field
		e.target.itemToAdd.value = '';
	};

	render() {
		return (
			// add onSubmit={this.onSubmitForm} to trigger onSubmitForm function when click submit button
			<form onSubmit={this.onSubmitForm}>
				<input
					name="itemToAdd"
					type="text"
					placeholder="add an item to the list"
					aria-label="Shopping list item"
				/>
				<button type="submit">Add Item</button>
			</form>
		);
	}
}
