import { useState } from 'react';
import { getBeers } from '../../API/API';

import Beer from '../../components/Beer/Beer';

import './BeersContainer.scss';

const BeersContainer = ({ formData, basket, setBasket }) => {
	const [beers, setBeers] = useState([]);

	const filtered = beers.filter((beer) => {
		return beer.name.toLowerCase().includes(formData.searchTerm);
	});

	const getData = async () => {
		const res = await getBeers(formData);
		setBeers(res);
	};

	getData();

	return (
		<div>
			<p className='beers__header'>See our selection of quality beers</p>

			<section className='beers'>
				{filtered &&
					filtered.map((beer) => {
						return <Beer beer={beer} basket={basket} setBasket={setBasket} />;
					})}
			</section>
		</div>
	);
};

export default BeersContainer;
