import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArticleLink from '../../components/ArticleLink';

describe('ArticleLink', () => {
	const articleWithImage = {
		title: 'Test Article',
		abstract: 'This is a test abstract.',
		media: [
			{
				'media-metadata': [{ url: 'https://example.com/test-image.jpg' }]
			}
		]
	};

	const articleWithoutImage = {
		title: 'Test Article',
		abstract: 'This is a test abstract.',
		media: []
	};

	test('renders article with image correctly', () => {
		render(
			<MemoryRouter>
				<ArticleLink article={articleWithImage} />
			</MemoryRouter>
		);

		expect(screen.getByText('Test Article')).toBeInTheDocument();
		expect(screen.getByText('This is a test abstract.')).toBeInTheDocument();
		const image = screen.getByAltText('Test Article');
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('src', 'https://example.com/test-image.jpg');
	});

	test('renders fallback when no image is available', () => {
		render(
			<MemoryRouter>
				<ArticleLink article={articleWithoutImage} />
			</MemoryRouter>
		);

		expect(screen.getByText('Test Article')).toBeInTheDocument();
		expect(screen.getByText('This is a test abstract.')).toBeInTheDocument();
		expect(screen.getByText('No Image')).toBeInTheDocument();
	});

	test('renders the link with correct detail', () => {
		render(
			<MemoryRouter>
				<ArticleLink article={articleWithImage} />
			</MemoryRouter>
		);

		const link = screen.getByRole('link');
		expect(link).toHaveAttribute('href', '/news-detail');
		expect(link).toHaveClass('article-link');
	});
});
