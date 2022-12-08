import axios from 'axios';

export const getBeers = async ({ highAbv, classic, acidic }) => {
	const url = 'https://api.punkapi.com/v2/beers';
	const options = {
		params: {
			per_page: 80,
		},
	};

	if (highAbv) options.params = { ...options.params, abv_gt: 6 };
	if (classic) options.params = { ...options.params, brewed_before: '01-2010' };

	try {
		const response = await axios.get(url, options);

		if (acidic) {
			return response.data.filter((beer) => beer.ph < 4);
		}

		return response.data;
	} catch (err) {
		console.log(err);
	}
};
