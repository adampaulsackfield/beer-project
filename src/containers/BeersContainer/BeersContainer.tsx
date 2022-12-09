import React, { ReactElement, useEffect, useState } from 'react';

// Components
import Beer from '../../components/Beer/Beer';

// Services
import { getBeers } from '../../services/beers.service';

// Styles
import './BeersContainer.scss';

// Interfaces
import { FormInterface } from '../../interfaces/FormInterface';
import { BeerInterface } from '../../interfaces/BeerInterface';

// Props
interface BeersContainerProps {
	formData: FormInterface;
	basket: BeerInterface[];
	setBasket: React.Dispatch<React.SetStateAction<Array<BeerInterface>>>;
}

const BeersContainer: React.FC<BeersContainerProps> = ({
	formData,
	basket,
	setBasket,
}): ReactElement => {
	const [beers, setBeers] = useState([]);
	const [cache, setCache] = useState(new Map());

	// Filtered is used to filter the beers we have in state against the input for searchTerm. Which checks against beer names.
	const filtered =
		beers &&
		beers.filter((beer) => {
			return beer.name.toLowerCase().includes(formData.searchTerm);
		});

	// useEffect runs on load and when the formData is updated. Also, implemented a cache, so we can minimize API calls. It has been set up using a Map. Whenever the useEffect is run, the highAbv, classic, and acidic state are stringified, then we check if the Map already has this key. If it does we return the previously stored results. If it is a new query then we let it go to the API, and the response is added to the cache.

	const handleRequest = async (userCache) => {
		const query = { ...formData };

		const queryString = JSON.stringify(query);

		const isCached = cache.has(queryString);
		if (isCached) {
			setBeers(userCache.get(queryString));
			return console.log('Cached Version');
		}

		try {
			const response = await getBeers(formData);
			setCache(cache.set(queryString, response));
			setBeers(response);
			return console.log('API Version');
		} catch (error) {
			return console.log('ERROR');
		}
	};

	useEffect(() => {
		handleRequest(cache); // ! This works but I don't know why. There is no dependency array, as it complains if I add formData, but it still runs when I update formData.
	});

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
