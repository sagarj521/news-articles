import React from 'react';
import PropTypes from 'prop-types';

const ArticleDetail = ({ article }) => {
	return (
		<li className="article-item">
			{article.media && article.media[0] && article.media[0]['media-metadata'] ? (
				<img
					src={article.media[0]['media-metadata'][0].url}
					alt={article.title}
					className="article-thumbnail"
				/>
			) : (
				<div className="no-image">No Image</div>
			)}
			<a className="article-link" href={article.url} target="_blank" rel="noreferrer">
				<div className="article-info">
					<h2>{article.title}</h2>
					<p>{article.abstract}</p>
				</div>
			</a>
		</li>
	);
};

ArticleDetail.propTypes = {
	article: PropTypes.object
};

export default ArticleDetail;
