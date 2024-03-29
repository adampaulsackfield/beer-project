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
type BeersContainerProps = {
	formData: FormInterface;
	setFormData: React.Dispatch<React.SetStateAction<FormInterface>>;
	basket: BeerInterface[];
	setBasket: React.Dispatch<React.SetStateAction<Array<BeerInterface>>>;
};

const BeersContainer: React.FC<BeersContainerProps> = ({
	formData,
	setFormData,
	basket,
	setBasket,
}): ReactElement => {
	const [beers, setBeers] = useState<Array<BeerInterface>>([]);
	const [cache, setCache] = useState<Map<string, Array<BeerInterface>>>(
		new Map()
	);

	// handleRequest builds a queryString and checks if it is stored in the cache, if it is it updates the state. If it isn't it makes the API request and updates the state and saves the query and response to the cache.
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
		handleRequest(cache); // ! This works but I don't know why. There is no dependency array, as it complains if I add formData, but it still runs when I update formData. Leaving formData in with intellisense complaining.
	});

	const handleNextPage = () => {
		if (formData.page === 5) return;
		setFormData({ ...formData, page: ++formData.page });
	};

	return (
		<div>
			<p className='beers__header'>See our selection of quality beers</p>

			{/* Once we have the beers we can map over them and send to Beer components. */}
			<section className='beers'>
				{beers &&
					beers.map((beer) => {
						return (
							<Beer
								key={beer.id}
								beer={beer}
								basket={basket}
								setBasket={setBasket}
							/>
						);
					})}
				{formData.page < 5 && (
					<button className='beers__show-more' onClick={handleNextPage}>
						Load next page
					</button>
				)}
			</section>
		</div>
	);
};

export default BeersContainer;
