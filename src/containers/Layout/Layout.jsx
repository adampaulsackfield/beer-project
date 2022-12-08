import { useState } from 'react';
import Basket from '../../components/Basket/Basket';

import Navbar from '../../components/Navbar/Navbar';
import BeersContainer from '../BeersContainer/BeersContainer';

import './Layout.scss';

const initialState = {
	searchTerm: '',
	highAbv: false,
	classic: false,
	acidic: false,
};

const Layout = () => {
	const [formData, setFormData] = useState(initialState);
	const [basket, setBasket] = useState([]);

	return (
		<section className='layout'>
			<Navbar formData={formData} setFormData={setFormData} basket={basket} />

			<BeersContainer
				formData={formData}
				basket={basket}
				setBasket={setBasket}
			/>

			<Basket basket={basket} setBasket={setBasket} />
		</section>
	);
};

export default Layout;
