import { useState } from 'react';
import Form from '../Form/Form';
import Header from '../Header/Header';

import './Navbar.scss';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<aside className={`navbar ${isOpen ? 'open' : ''}`}>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />

			<Form isOpen={isOpen} />
		</aside>
	);
};

export default Navbar;
