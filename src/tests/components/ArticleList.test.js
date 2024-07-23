import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ArticleList from '../../containers/ArticleList';
import { fetchMostPopularArticles } from '../../services/nytimesService';
import { MemoryRouter } from 'react-router';

jest.mock('../../services/nytimesService');

describe('ArticleLink', () => {
	test('renders articles list', async () => {
		const articles = [
			{
				id: 1,
				title: 'Article 1',
				abstract: 'Abstract 1',
				url: 'https://example.com'
			},
			{
				id: 2,
				title: 'Article 2',
				abstract: 'Abstract 2',
				url: 'https://example.com'
			}
		];
		fetchMostPopularArticles.mockResolvedValue(articles);

		render(
			<MemoryRouter>
				<ArticleList />
			</MemoryRouter>
		);

		await waitFor(() => {
			articles.forEach((article) => {
				expect(screen.getByText(article.title)).toBeInTheDocument();
			});
		});
	});
});
