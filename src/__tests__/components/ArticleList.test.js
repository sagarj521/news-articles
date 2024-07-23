import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ArticleList from "../../components/ArticleList";
import { fetchMostPopularArticles } from "../../services/nytimesService";

jest.mock("../../services/nytimesService");

test("renders articles list", async () => {
  const articles = [
    {
      id: 1,
      title: "Article 1",
      abstract: "Abstract 1",
      url: "https://example.com",
    },
    {
      id: 2,
      title: "Article 2",
      abstract: "Abstract 2",
      url: "https://example.com",
    },
  ];
  fetchMostPopularArticles.mockResolvedValue(articles);

  render(<ArticleList />);

  await waitFor(() => {
    articles.forEach((article) => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
    });
  });
});
