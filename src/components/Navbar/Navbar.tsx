import React, { ReactElement, useState } from 'react';

// Hamburger Menu
import { Divide as Hamburger } from 'hamburger-react';

// React Icons
import { FaShoppingBasket } from 'react-icons/fa';

// Components
import Footer from '../Footer/Footer';
import Form from '../Form/Form';

// Interfaces
import { BeerInterface } from '../../interfaces/BeerInterface';
import { FormInterface } from '../../interfaces/FormInterface';

// Styles
import './Navbar.scss';

// Props
type NavbarProps = {
	formData: FormInterface;
	setFormData: React.Dispatch<React.SetStateAction<FormInterface>>;
	basket: BeerInterface[];
	showBasket: boolean;
	toggleBasket: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({
	formData,
	setFormData,
	basket,
	showBasket,
	toggleBasket,
}): ReactElement => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

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
					// ! TODO Styled here as it didn't apply from SCSS
				>
					Tienda de Cerveza
				</p>

				<div className='sidebar__small--cart-icon' onClick={handleClick}>
					<FaShoppingBasket data-testid='basket' />
					{basket.length > 0 && (
						<span className='sidebar__small--cart-count'>{basket.length}</span>
					)}
				</div>
			</section>
		</aside>
	);
};

export default Navbar;
