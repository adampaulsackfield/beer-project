import { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import { FaShoppingBasket } from 'react-icons/fa';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';

import './Navbar.scss';

const Navbar = ({ formData, setFormData, basket }) => {
	const [isOpen, setIsOpen] = useState(false);

	const date = new Date();

	return (
		<aside className='sidebar'>
			<section className='sidebar__main'>
				<Header />

				<Form formData={formData} setFormData={setFormData} />

				<Footer />
			</section>

			<section className='sidebar__small'>
				<Hamburger
					toggled={isOpen}
					toggle={setIsOpen}
					onToggle={() => document.body.classList.toggle('body--open')}
					color='#c23838'
				/>

				<div className='sidebar__small--cart-icon'>
					<FaShoppingBasket />
					{basket.length > 0 && (
						<span className='sidebar__small--cart-count'>{basket.length}</span>
					)}
				</div>
			</section>
		</aside>
	);
};

export default Navbar;
