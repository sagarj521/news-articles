import React from 'react';
import './ArticleDetail.css';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

const ArticleDetail = () => {
	const navigate = useNavigate();
	const { state } = useLocation();

	const articleDetail = state && state.article ? JSON.parse(state?.article) : {};

	return (
		<React.Fragment>
			<div className="news-container">
				<button className="back-button" onClick={() => navigate(-1)}>
					Back to Article List
				</button>
				<h2 className="news-title news-content">{articleDetail.title}</h2>
				<div className="news-image">
					{articleDetail.media &&
					articleDetail.media[0] &&
					articleDetail.media[0]['media-metadata'] ? (
						<img
							src={articleDetail.media[0]['media-metadata'][2].url}
							alt={articleDetail.title}
							className="article-thumbnail"
						/>
					) : (
						<div className="no-image">No Image</div>
					)}
				</div>
				<div className="news-content">
					<p className="news-description">{articleDetail.abstract}</p>
					<div className="news-footer">
						<span className="news-date">Posted on: {articleDetail.published_date}</span>
						<a
							className="article-link"
							href={articleDetail.url}
							target="_blank"
							rel="noreferrer"
						>
							View Details
						</a>
						<span className="news-source">Source: {articleDetail.source}</span>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ArticleDetail;
