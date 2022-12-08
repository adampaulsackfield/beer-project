import { useState } from 'react';
import { getBeers } from '../../API/API';

import Beer from '../../components/Beer/Beer';
import data from '../../assets/data';

import './BeersContainer.scss';

const BeersContainer = ({ formData }) => {
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
		<section className='beers'>
			{/* <p className='beers__header'>See our selection of quality beers</p> */}

			{filtered &&
				filtered.map((beer) => {
					return <Beer beer={beer} />;
				})}
		</section>
	);
};

export default BeersContainer;
