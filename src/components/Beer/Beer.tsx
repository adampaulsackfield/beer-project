import React, { ReactElement } from 'react';

// Interfaces
import { BeerInterface } from '../../interfaces/BeerInterface';

// Styles
import './Beer.scss';

// Props
type BeerProps = {
	beer: BeerInterface;
	basket: BeerInterface[];
	setBasket: React.Dispatch<React.SetStateAction<Array<BeerInterface>>>;
};

const Beer: React.FC<BeerProps> = ({
	beer,
	basket,
	setBasket,
}): ReactElement => {
	// Simple function to add items to the cart. Does not join duplicates.
	const addToCart = (): void => {
		setBasket([...basket, beer]);
	};

	return (
		<article key={beer.id} className='beer'>
			<img className='beer__img' src={beer.image_url} alt={beer.name} />

			<ul className='beer__info'>
				<li className='beer__info--item'>ABV: {beer.abv}%</li>
				<li className='beer__info--item'>
					{beer.volume.value} {beer.volume.unit}
				</li>
				<li className='beer__info--item'>Est. {beer.first_brewed}</li>
			</ul>

			<p className='beer__header'>
				{beer.name}{' '}
				<span className='beer__header--quantity'>
					({beer.volume.value} {beer.volume.unit})
				</span>
			</p>

			<p className='beer__subheader'>{beer.tagline}</p>

			<p className='beer__description'>{beer.description.slice(0, 100)}...</p>

			<button className='beer__button' onClick={addToCart}>
				ADD TO CART
			</button>
		</article>
	);
};

export default Beer;
