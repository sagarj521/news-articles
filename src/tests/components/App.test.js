import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

// Mock the ArticleList and ArticleDetail components
jest.mock('../../containers/ArticleList', () => {
	const ArticleList = () => <div>Article List Component</div>;

	return ArticleList;
});

jest.mock('../../components/ArticleDetail', () => {
	const ArticleDetail = () => <div>Article Detail Component</div>;

	return ArticleDetail;
});

describe('App', () => {
	test('renders title correctly', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		expect(screen.getByText('NY Times Most Popular Articles')).toBeInTheDocument();
	});

	test('renders ArticleList component for the root route', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<App />
			</MemoryRouter>
		);
		expect(screen.getByText('Article List Component')).toBeInTheDocument();
	});

	test('renders ArticleDetail component for the news-detail route', () => {
		render(
			<MemoryRouter initialEntries={['/news-detail']}>
				<App />
			</MemoryRouter>
		);
		expect(screen.getByText('Article Detail Component')).toBeInTheDocument();
	});
});
