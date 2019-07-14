import React from 'react';
import './todoListItem.css';

const TodoListItem = (props) => {
	const {label} = props;
	return  (
		<div className="list-item">
			{label}
		</div>
	)
}

export default TodoListItem;
