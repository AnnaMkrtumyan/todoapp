import React from 'react';
import TodoListItem from '../../components/todoListItem';

const TodoList = () => {
	return  (
		<div className="table-wrapper">
			<TodoListItem label="drink coffe" />
			<TodoListItem label="todo app" />
			<TodoListItem label="sleep" />
		</div>
	)
}

export default TodoList;
