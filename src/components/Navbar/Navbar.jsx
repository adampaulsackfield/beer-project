import { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import { FaShoppingBasket } from 'react-icons/fa';

import Footer from '../Footer/Footer';
import Form from '../Form/Form';

import './Navbar.scss';

const Navbar = ({
	formData,
	setFormData,
	basket,
	showBasket,
	toggleBasket,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		toggleBasket(!showBasket);
	};

	return (
		<aside className='sidebar'>
			<section className='sidebar__main'>
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

				<p
					className='sidebar__small--logo'
					style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
				>
					Tienda de Cerve
				</p>

				<div className='sidebar__small--cart-icon' onClick={handleClick}>
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
