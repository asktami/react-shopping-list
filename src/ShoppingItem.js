import React from 'react';

// can not use static defaultProps inside function
// BECAUSE its a function
// so must assign object like this
// ComponentName.defaultProps
ShoppingItem.defaultProps = {
	item: {}
};

export default function ShoppingItem(props) {
	return (
		<li>
			<h2
				style={{
					textDecoration: props.item.checked ? 'line-through black' : null
				}}
			>
				{props.item.name}
			</h2>
			<button onClick={props.onCheckItem(props.item)} type="button">
				check
			</button>
			<button onClick={props.onDeleteItem(props.item)} type="button">
				delete
			</button>
		</li>
	);
}
