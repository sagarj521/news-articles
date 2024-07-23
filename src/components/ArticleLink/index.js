import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleLink = ({ article }) => {
	return (
		<li className="article-item">
			<Link
				to={`/news-detail`}
				state={{ article: JSON.stringify(article) }}
				className="article-link"
			>
				{article.media && article.media[0] && article.media[0]['media-metadata'] ? (
					<img
						src={article.media[0]['media-metadata'][0].url}
						alt={article.title}
						className="article-thumbnail"
					/>
				) : (
					<div className="no-image">No Image</div>
				)}

				<div className="article-info">
					<h2>{article.title}</h2>
					<p>{article.abstract}</p>
				</div>
			</Link>
		</li>
	);
};

ArticleLink.propTypes = {
	article: PropTypes.object
};

export default ArticleLink;
