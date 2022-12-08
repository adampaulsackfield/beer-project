import { useState } from 'react';
import Basket from '../../components/Basket/Basket';

import Navbar from '../../components/Navbar/Navbar';
import BeersContainer from '../BeersContainer/BeersContainer';

import './LayoutContainer.scss';

const initialState = {
	searchTerm: '',
	highAbv: false,
	classic: false,
	acidic: false,
};

const LayoutContainer = () => {
	const [formData, setFormData] = useState(initialState);
	const [basket, setBasket] = useState([]);
	const [showBasket, setShowBasket] = useState(false);

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
