import React from 'react';

const TodoListItem = (props) => {
	const {label} = props;
	return  (
		<div className="list-item">
			{label}
		</div>
	)
}

export default TodoListItem;
