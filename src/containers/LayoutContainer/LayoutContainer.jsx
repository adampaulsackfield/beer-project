import { useState } from 'react';
import Basket from '../../components/Basket/Basket';

import Navbar from '../../components/Navbar/Navbar';
import BeersContainer from '../BeersContainer/BeersContainer';

import './LayoutContainer.scss';

// Initial State for the formData
const initialState = {
	searchTerm: '',
	highAbv: false,
	classic: false,
	acidic: false,
};

// Layout Container that house all layout components. Common state is housed at this level to reach the required components. If this project added more features then I would be looking at the Context API.
const LayoutContainer = () => {
	const [formData, setFormData] = useState(initialState);
	const [basket, setBasket] = useState([]); // State for basket functionality
	const [showBasket, setShowBasket] = useState(false); // State for showing the basket

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
