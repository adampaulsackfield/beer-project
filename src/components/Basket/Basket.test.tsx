import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BeerInterface } from '../../interfaces/BeerInterface';
import { mockBeers } from '../../assets/testing/mockData';

import Basket from './Basket';

const Wrapper = ({ mockBasket = null }) => {
	const [basket, setBasket] = useState<Array<BeerInterface>>([]);
	const [showBasket, setShowBasket] = useState<boolean>(false);

	return (
		<Basket
			basket={mockBasket ?? basket}
			setBasket={setBasket}
			showBasket={showBasket}
			toggleBasket={setShowBasket}
		/>
	);
};

describe('<Basket /> Tests', () => {
	it('should render the <Basket /> component with no items', () => {
		render(<Wrapper mockBasket={[]} />);

		const basketHeader = screen.getByText('Your Basket');
		const beers = screen.queryAllByText(/Buzz/i);

		expect(basketHeader).toBeInTheDocument();
		expect(beers).toHaveLength(0);
	});

	it('should render the <Basket /> component with a single item', () => {
		render(<Wrapper mockBasket={[mockBeers[0]]} />);

		const beers = screen.queryAllByTestId(/trash/i);

		expect(beers).toHaveLength(1);
	});

	it('should render the <Basket /> component with multiple items', () => {
		render(<Wrapper mockBasket={mockBeers} />);

		const beers = screen.queryAllByTestId(/trash/i);

		expect(beers).toHaveLength(2);
	});

	it('should be able to remove an item from the basket', async () => {
		render(<Wrapper mockBasket={mockBeers} />);

		// TODO Complete userEvent Tests
	});
});
