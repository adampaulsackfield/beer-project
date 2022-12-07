import { useState } from 'react';
import Form from '../Form/Form';
import Header from '../Header/Header';

import './Navbar.scss';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const date = new Date();

	return (
		<aside className={`navbar ${isOpen ? 'navbar--open' : ''}`}>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />

			<Form isOpen={isOpen} />

			<footer className='navbar__footer'>
				Cerveza {date.getFullYear()}&copy;
			</footer>
		</aside>
	);
};

export default Navbar;
