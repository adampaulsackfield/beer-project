import axios from 'axios';

// Interfaces
import { BeerInterface } from '../interfaces/BeerInterface';
import { ParamsInterface } from '../interfaces/ParamsInterface';

// Axios Request, takes any user queries and builds a queryString. For acidic, the API offered no option so this is done with a helper function to filter the results.
export const getBeers = async ({
	highAbv,
	classic,
	acidic,
	page,
}: {
	highAbv: boolean;
	classic: boolean;
	acidic: boolean;
	page: number;
}): Promise<BeerInterface[]> => {
	const url = 'https://api.punkapi.com/v2/beers';
	const options: ParamsInterface = {
		params: {
			per_page: 80,
			page: page,
		},
	};

	if (highAbv) options.params = { ...options.params, abv_gt: 6 };
	if (classic) options.params = { ...options.params, brewed_before: '01-2010' };

	try {
		const response = await axios.get(url, options);

		if (acidic) return filterAcidic(response.data);

		return response.data;
	} catch (err) {
		return err;
	}
};

// Filters for acidity > 4
const filterAcidic = (beers: BeerInterface[]): BeerInterface[] => {
	return beers.filter((beer) => beer.ph < 4);
};
