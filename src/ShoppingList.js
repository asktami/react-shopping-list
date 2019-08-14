import React from 'react';
import ShoppingItem from './ShoppingItem';

export default function ShoppingList(props) {
	return (
		<ul className="theList">
			{props.items.map((item, index) => (
				<ShoppingItem
					key={index}
					item={item}
					/* add the two callback props here */
					onDeleteItem={props.onDeleteItem}
					onCheckItem={props.onCheckItem}
				/>
			))}
		</ul>
	);
}

ShoppingList.defaultProps = {
	items: []
};
