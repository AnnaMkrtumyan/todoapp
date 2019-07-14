import React from 'react';
import './headerWrapper.css';

const HeaderWrapper = () => {
	return  (
		<div className="header-wrapper">
			<div className="search-wrapper">
				<input
				  type="search"
				  name="search"
				  placeholder="Search"
				/>
			</div>
			<button type="button">Add Task</button>
		 </div>
	)
}

export default HeaderWrapper;
