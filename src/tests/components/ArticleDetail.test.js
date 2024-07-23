import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';
import ArticleDetail from '../../components/ArticleDetail';

// Mock the react-router-dom hooks
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
	useLocation: jest.fn()
}));

describe('ArticleDetail', () => {
	const navigate = jest.fn();

	const articleWithImage = {
		title: 'Test Article',
		abstract: 'This is a test abstract.',
		media: [
			{
				'media-metadata': [{}, {}, { url: 'https://example.com/test-image.jpg' }]
			}
		],
		published_date: '2024-07-23',
		url: 'https://example.com/test-article',
		source: 'Test Source'
	};

	const articleWithoutImage = {
		title: 'Test Article',
		abstract: 'This is a test abstract.',
		media: [],
		published_date: '2024-07-23',
		url: 'https://example.com/test-article',
		source: 'Test Source'
	};

	beforeEach(() => {
		jest.clearAllMocks();
		useNavigate.mockReturnValue(navigate);
	});

	test('renders fallback when no image is available', () => {
		useLocation.mockReturnValue({
			state: { article: JSON.stringify(articleWithoutImage) }
		});

		render(
			<MemoryRouter>
				<ArticleDetail />
			</MemoryRouter>
		);

		expect(screen.getByText('No Image')).toBeInTheDocument();
	});

	test('navigates back to article list on button click', () => {
		useLocation.mockReturnValue({
			state: { article: JSON.stringify(articleWithImage) }
		});

		render(
			<MemoryRouter>
				<ArticleDetail />
			</MemoryRouter>
		);

		fireEvent.click(screen.getByText('Back to Article List'));
		expect(navigate).toHaveBeenCalledWith(-1);
	});

	test('renders view details link correctly', () => {
		useLocation.mockReturnValue({
			state: { article: JSON.stringify(articleWithImage) }
		});

		render(
			<MemoryRouter>
				<ArticleDetail />
			</MemoryRouter>
		);

		const link = screen.getByText('View Details');
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noreferrer');
	});
});
