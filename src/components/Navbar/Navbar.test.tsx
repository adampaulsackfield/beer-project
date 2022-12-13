import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

import { FormInterface } from '../../interfaces/FormInterface';
import { BeerInterface } from '../../interfaces/BeerInterface';

import { mockBeers } from '../../assets/testing/mockData';
import userEvent from '@testing-library/user-event';
import { debug } from 'console';

const mockFormData: FormInterface = {
	searchTerm: '',
	highAbv: false,
	classic: false,
	acidic: false,
	page: 1,
};

const Wrapper = ({ mockBasket = null, mockFormData = null }) => {
	const [formData, setFormData] = useState<FormInterface>(mockFormData);
	const [basket, setBasket] = useState<Array<BeerInterface>>([]);
	const [showBasket, setShowBasket] = useState<boolean>(false);

	return (
		<Navbar
			formData={mockFormData ?? formData}
			setFormData={setFormData}
			basket={mockBasket ?? basket}
			showBasket={showBasket}
			toggleBasket={setShowBasket}
		/>
	);
};

describe('<Navbar /> Tests', () => {
	it('should render the <Navbar /> component', () => {
		render(<Wrapper mockBasket={[]} mockFormData={mockFormData} />);

		const headerText = screen.getByText(/Tienda de Cerveza/i);

		expect(headerText).toBeInTheDocument();
	});

	it('should be able to toggle the <Basket /> component', () => {
		// TODO
	});
});
