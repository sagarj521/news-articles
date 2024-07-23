import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleDetail from '../../components/ArticleDetail';

// Mock article data
const mockArticleWithImage = {
	id: 1,
	title: 'Sample Article',
	abstract: 'This is a sample article',
	url: 'http://example.com',
	media: [
		{
			'media-metadata': [
				{
					url: 'http://example.com/sample.jpg'
				}
			]
		}
	]
};

const mockArticleWithoutImage = {
	id: 2,
	title: 'Sample Article Without Image',
	abstract: 'This is a sample article without an image',
	url: 'http://example.com',
	media: []
};

describe('ArticleDetail Component', () => {
	test('renders with article data correctly', () => {
		const { getByText } = render(<ArticleDetail article={mockArticleWithImage} />);
		expect(getByText('Sample Article')).toBeInTheDocument();
		expect(getByText('This is a sample article')).toBeInTheDocument();
	});

	test('displays image if available', () => {
		const { getByAltText } = render(<ArticleDetail article={mockArticleWithImage} />);
		const img = getByAltText('Sample Article');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src', 'http://example.com/sample.jpg');
	});

	test('displays "No Image" if no image is available', () => {
		const { getByText } = render(<ArticleDetail article={mockArticleWithoutImage} />);
		expect(getByText('No Image')).toBeInTheDocument();
	});

	test('has working link with correct URL', () => {
		const { getByRole } = render(<ArticleDetail article={mockArticleWithImage} />);
		const link = getByRole('link', { name: /sample article/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', 'http://example.com');
		expect(link).toHaveAttribute('target', '_blank');
	});
});
