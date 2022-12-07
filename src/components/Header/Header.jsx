import { Divide as Hamburger } from 'hamburger-react';

import './Header.scss';

const Header = ({ isOpen, setIsOpen }) => {
	return (
		<header className='header'>
			<h1 className={`header__logo ${isOpen ? 'show' : ''}`}>Cerveza</h1>

			<Hamburger
				className='header__menu'
				toggled={isOpen}
				toggle={setIsOpen}
				onToggle={''}
				color='#4FD1C5'
			/>
		</header>
	);
};

export default Header;
