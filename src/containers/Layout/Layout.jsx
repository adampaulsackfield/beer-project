import { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';

import './Layout.scss';

const initialState = {
	searchTerm: '',
	highAbv: false,
	classic: false,
	acidic: false,
};

const Layout = () => {
	const [formData, setFormData] = useState(initialState);

	return (
		<section className='layout'>
			<Navbar formData={formData} setFormData={setFormData} />
		</section>
	);
};

export default Layout;
