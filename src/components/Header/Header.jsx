import { Divide as Hamburger } from 'hamburger-react';

import './Header.scss';

const Header = ({ isOpen, setIsOpen }) => {
	return (
		<header className='header'>
			<h1 className={`header__logo ${isOpen ? 'header__logo--show' : ''}`}>
				Cerveza
			</h1>

			<div className='header__menu'>
				<Hamburger
					toggled={isOpen}
					toggle={setIsOpen}
					onToggle={''}
					color='#dd1cad'
				/>
			</div>
		</header>
	);
};

export default Header;
