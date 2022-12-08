import { FaRegTrashAlt } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import './Basket.scss';

const Basket = ({ basket, setBasket, showBasket, toggleBasket }) => {
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
					<p className='basket__header--text'>Basket</p>
					<ImCross className='basket__header--cross' onClick={handleClick} />
				</div>
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
