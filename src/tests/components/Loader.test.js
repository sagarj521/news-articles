import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from '../../components/Loader';
import { MemoryRouter } from 'react-router';

test('renders without crashing', () => {
	const { container } = render(
		<MemoryRouter>
			<Loader />
		</MemoryRouter>
	);
	expect(container).toBeInTheDocument();
});

test('matches snapshot', () => {
	const { asFragment } = render(
		<MemoryRouter>
			<Loader />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
