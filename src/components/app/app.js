import React from 'react';

import HeaderWrapper from '../../components/headerWrapper';
import TodoList from '../../components/todoList';

const App = () => {
	fetch('https://swapi.co/api/people')
		.then(res => {
			console.log('res', res);
		})
	return (
		<div>
			<HeaderWrapper />
			<TodoList />
		</div>
	);
};

export default App;