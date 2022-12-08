import { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';

import Header from '../Header/Header';
import Form from '../Form/Form';

import './Navbar.scss';

const Navbar = ({ formData, setFormData }) => {
	const [isOpen, setIsOpen] = useState(false);

	const date = new Date();

	return (
		<aside className='sidebar'>
			<section className='sidebar__main'>
				<Header />

				<Form formData={formData} setFormData={setFormData} />

				<footer>Cerveza {date.getFullYear()}&copy;</footer>
			</section>

			<section className='sidebar__small'>
				<Hamburger
					toggled={isOpen}
					toggle={setIsOpen}
					onToggle={() => document.body.classList.toggle('body--open')}
					color='#dd1cad'
				/>
			</section>
		</aside>
	);
};

export default Navbar;
