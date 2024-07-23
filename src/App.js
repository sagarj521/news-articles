import React, { Fragment } from 'react';
import './App.css';
import ArticleList from './containers/ArticleList';

function App() {
	return (
		<Fragment>
			<div className="App">
				<h1>NY Times Most Popular Articles</h1>
			</div>
			<ArticleList />
		</Fragment>
	);
}

export default App;
