//External Dependencies
import React, { useEffect, useState } from 'react';

//Internal dependencies
import { fetchMostPopularArticles } from '../../services/nytimesService';
import './ArticleList.css';
import Loader from '../../components/Loader';
import ArticleDetail from '../../components/ArticleDetail';

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
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	/**
	 * useEffect hook to fetch articles on component mount.
	 * and the state is updated accordingly.
	 */
	useEffect(() => {
		const getArticles = async () => {
			const data = await fetchMostPopularArticles(1);
			setIsLoading(false);
			setArticles(data);
		};
		getArticles();
	}, []);

	return (
		<ul className="article-list">
			{isLoading ? (
				<Loader />
			) : (
				articles.map((article) => <ArticleDetail key={article.id} article={article} />)
			)}
		</ul>
	);
};

export default ArticleList;
