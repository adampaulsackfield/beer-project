import { useEffect, useState } from 'react';
import { getBeers } from '../../API/API';

import Beer from '../../components/Beer/Beer';

import './BeersContainer.scss';

const BeersContainer = ({ formData, basket, setBasket }) => {
	const [beers, setBeers] = useState([]);
	const [cache, setCache] = useState(new Map());

	// Filtered is used to filter the beers we have in state against the input for searchTerm. Which checks against beer names.
	const filtered =
		beers &&
		beers.filter((beer) => {
			return beer.name.toLowerCase().includes(formData.searchTerm);
		});

	// useEffect runs on load and when the formData is updated. Also, implemented a cache, so we can minimize API calls. It has been set up using a Map. Whenever the useEffect is run, the highAbv, classic, and acidic state are stringified, then we check if the Map already has this key. If it does we return the previously stored results. If it is a new query then we let it go to the API, and the response is added to the cache.
	useEffect(() => {
		const makeRequest = async () => {
			const { highAbv, classic, acidic } = formData;

			const queryString = JSON.stringify({ highAbv, classic, acidic });

			const isCached = cache.has(queryString);

			if (isCached) {
				setBeers(cache.get(queryString));
				return;
			} else {
				const beersResponse = await getBeers(formData);
				setCache(cache.set(queryString, beersResponse));
				setBeers(beersResponse);
			}
		};
		makeRequest();
	}, [formData]);

	return (
		<div>
			<p className='beers__header'>See our selection of quality beers</p>

			{/* Once we have the beers we can map over them and send to Beer components. */}
			<section className='beers'>
				{filtered &&
					filtered.map((beer) => {
						return (
							<Beer
								key={beer.id}
								beer={beer}
								basket={basket}
								setBasket={setBasket}
							/>
						);
					})}
			</section>
		</div>
	);
};

export default BeersContainer;
