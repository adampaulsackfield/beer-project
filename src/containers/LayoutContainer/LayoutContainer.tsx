import React, { ReactElement, useState } from 'react';

// Containers
import BeersContainer from '../BeersContainer/BeersContainer';

// Components
import Navbar from '../../components/Navbar/Navbar';
import Basket from '../../components/Basket/Basket';

// Interfaces
import { BeerInterface } from '../../interfaces/BeerInterface';
import { FormInterface } from '../../interfaces/FormInterface';

// Styles
import './LayoutContainer.scss';

// Initial State for the formData
const initialState: FormInterface = {
	searchTerm: '',
	highAbv: false,
	classic: false,
	acidic: false,
	page: 1,
};

// Layout Container that house all layout components. Common state is housed at this level to reach the required components. If this project added more features then I would be looking at the Context API.
const LayoutContainer: React.FC = (): ReactElement => {
	const [formData, setFormData] = useState<FormInterface>(initialState);
	const [basket, setBasket] = useState<Array<BeerInterface>>([]); // State for basket functionality
	const [showBasket, setShowBasket] = useState<boolean>(false); // State for showing the basket

	return (
		<section className='layout'>
			<Navbar
				formData={formData}
				setFormData={setFormData}
				basket={basket}
				showBasket={showBasket}
				toggleBasket={setShowBasket}
			/>

			<BeersContainer
				formData={formData}
				setFormData={setFormData}
				basket={basket}
				setBasket={setBasket}
			/>

			<Basket
				basket={basket}
				setBasket={setBasket}
				showBasket={showBasket}
				toggleBasket={setShowBasket}
			/>
		</section>
	);
};

export default LayoutContainer;
