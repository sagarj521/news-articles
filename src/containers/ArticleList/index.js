//External Dependencies
import React, { useCallback, useEffect, useState } from 'react';

//Internal dependencies
import { fetchMostPopularArticles } from '../../services/nytimesService';
import './ArticleList.css';
import Loader from '../../components/Loader';
import ArticleLink from '../../components/ArticleLink';
/**
 * A component that fetches and displays the most popular articles from the New York Times.
 *
 * @component
 * @example
 * return (
 *   <ArticleList />
 * )
 */
const ArticleList = () => {
	const [state, setState] = useState({
		articles: [],
		isLoading: true,
		hasError: false
	});

	const getArticles = useCallback(async () => {
		try {
			const data = await fetchMostPopularArticles(1);
			setState({ articles: data, isLoading: false, hasError: false });
		} catch (error) {
			console.error('Error fetching articles:', error);
			setState({ articles: [], isLoading: false, hasError: true });
		}
	}, []);

	useEffect(() => {
		getArticles();
	}, [getArticles]);

	const { articles, isLoading, hasError } = state;

	if (isLoading) {
		return <Loader />;
	}

	if (hasError) {
		return <p>Something went wrong. Please try again later.</p>;
	}

	return (
		<ul className="article-list">
			{articles.map((article) => (
				<ArticleLink key={article.id} article={article} />
			))}
		</ul>
	);
};

export default ArticleList;
