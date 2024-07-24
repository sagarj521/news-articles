import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { fetchMostPopularArticles } from '../../services/nytimesService';
import ArticleList from '../../containers/ArticleList';
import { MemoryRouter } from 'react-router';

jest.mock('../../services/nytimesService');

describe('ArticleList Component', () => {
	it('should display the loader while fetching articles', () => {
		fetchMostPopularArticles.mockResolvedValue([]);
		render(
			<MemoryRouter>
				<ArticleList />
			</MemoryRouter>
		);
		expect(screen.getByTestId('loader')).toBeInTheDocument();
	});

	it('should display an error message if fetching articles fails', async () => {
		fetchMostPopularArticles.mockRejectedValue(new Error('Failed to fetch articles'));
		render(
			<MemoryRouter>
				<ArticleList />
			</MemoryRouter>
		);
		await waitFor(() =>
			expect(
				screen.getByText('Something went wrong. Please try again later.')
			).toBeInTheDocument()
		);
	});

	it('should display articles when fetching articles is successful', async () => {
		const articles = [
			{ id: 1, title: 'Article 1' },
			{ id: 2, title: 'Article 2' }
		];
		fetchMostPopularArticles.mockResolvedValue(articles);
		render(
			<MemoryRouter>
				<ArticleList />
			</MemoryRouter>
		);

		await waitFor(() => {
			expect(screen.getByText('Article 1')).toBeInTheDocument();
			expect(screen.getByText('Article 2')).toBeInTheDocument();
		});
	});
});
