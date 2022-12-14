import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BeerInterface } from '../../interfaces/BeerInterface';
import { mockBeers } from '../../assets/testing/mockData';

import Beer from './Beer';

const Wrapper = ({ mockBasket = null }) => {
	const [basket, setBasket] = useState<Array<BeerInterface>>([]);

	return (
		<Beer
			beer={mockBeers[0]}
			basket={mockBasket ?? basket}
			setBasket={setBasket}
		/>
	);
};

describe('<Beer />', () => {
	it('should render the <Beer /> component', () => {
		render(<Wrapper mockBasket={[]} />);

		const beers = screen.getAllByText(/ABV/i);

		expect(beers).toHaveLength(1);
	});
});
