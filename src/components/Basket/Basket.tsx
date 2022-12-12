import React, { ReactElement } from 'react';

// Interfaces
import { BeerInterface } from '../../interfaces/BeerInterface';

// React Icons
import { ImCross } from 'react-icons/im';
import { FaRegTrashAlt } from 'react-icons/fa';

// Styles
import './Basket.scss';

type BasketProps = {
	basket: BeerInterface[];
	setBasket: React.Dispatch<React.SetStateAction<Array<BeerInterface>>>;
	showBasket: boolean;
	toggleBasket: React.Dispatch<React.SetStateAction<boolean>>;
};

const Basket: React.FC<BasketProps> = ({
	basket,
	setBasket,
	showBasket,
	toggleBasket,
}): ReactElement => {
	const removeItem = (item) => {
		const newBasket = basket.filter((beer) => beer.id !== item.id);

		setBasket(newBasket);
	};

	const handleClick = () => {
		toggleBasket(!showBasket);
	};

	return (
		<section className={`basket ${showBasket ? ' basket--show' : ''}`}>
			<ul className='basket__items'>
				<div className='basket__header'>
					<p className='basket__header--text'>Your Basket</p>
					<ImCross
						role='button'
						className='basket__header--cross'
						onClick={handleClick}
					/>
				</div>
				{basket &&
					basket.map((item) => {
						return (
							<li key={item.id} className='basket__item' data-testid='beer'>
								<img
									className='basket__item--img'
									src={item.image_url}
									alt=''
								/>
								<p className='basket__item--name'>{item.name}</p>
								<p className='basket__item--price'>£9.99</p>
								<FaRegTrashAlt
									data-testid={`trash-${item.id}`}
									role='button'
									color='red'
									onClick={() => removeItem(item)}
								/>
							</li>
						);
					})}
			</ul>
		</section>
	);
};

export default Basket;
