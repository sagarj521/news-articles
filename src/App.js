import React, { Fragment } from 'react';
import './App.css';
import ArticleList from './containers/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import { Route, Routes } from 'react-router';

function App() {
	return (
		<Fragment>
			<div className="App">
				<h1>NY Times Most Popular Articles</h1>
			</div>
			<Routes>
				<Route path="/" element={<ArticleList />} />
				<Route path="/news-detail" element={<ArticleDetail />} />
			</Routes>
			;
		</Fragment>
	);
}

export default App;
