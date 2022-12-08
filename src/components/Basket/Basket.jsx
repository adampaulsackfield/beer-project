import { FaRegTrashAlt } from 'react-icons/fa';

import './Basket.scss';

const Basket = ({ basket, setBasket }) => {
	const removeItem = (item) => {
		const newBasket = basket.filter((beer) => beer.id !== item.id);

		setBasket(newBasket);
	};

	return (
		<section className='basket'>
			<p className='basket__header'>Basket</p>

			<ul className='basket__items'>
				{basket &&
					basket.map((item) => {
						return (
							<li className='basket__item'>
								<img
									className='basket__item--img'
									src={item.image_url}
									alt=''
								/>
								<p className='basket__item--name'>{item.name}</p>
								<p className='basket__item--price'>£9.99</p>
								<FaRegTrashAlt color='red' onClick={() => removeItem(item)} />
							</li>
						);
					})}
			</ul>
		</section>
	);
};

export default Basket;
