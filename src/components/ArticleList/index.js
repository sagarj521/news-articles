import React, { useEffect, useState } from "react";
import { fetchMostPopularArticles } from "../../services/nytimesService";
import "./ArticleList.css";
import Loader from "../Loader";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        articles.map((article) => (
          <li key={article.id} className="article-item">
            {article.media &&
            article.media[0] &&
            article.media[0]["media-metadata"] ? (
              <img
                src={article.media[0]["media-metadata"][0].url}
                alt={article.title}
                className="article-thumbnail"
              />
            ) : (
              <div className="no-image">No Image</div>
            )}
            <a
              className="article-link"
              href={article.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="article-info">
                <h2>{article.title}</h2>
                <p>{article.abstract}</p>
              </div>
            </a>
          </li>
        ))
      )}
    </ul>
  );
};

export default ArticleList;
