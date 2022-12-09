import { BeerInterface } from '../../interfaces/BeerInterface';

export const mockBeers: BeerInterface[] = [
	{
		id: 1,
		name: 'Buzz',
		tagline: 'A Real Bitter Experience.',
		first_brewed: '09/2007',
		description:
			'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
		image_url: 'https://images.punkapi.com/v2/keg.png',
		abv: 4.5,
		ph: 4.4,
		volume: {
			value: 20,
			unit: 'litres',
		},
	},
	{
		id: 2,
		name: 'Trashy Blonde',
		tagline: "You Know You Shouldn't",
		first_brewed: '04/2008',
		description:
			'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
		image_url: 'https://images.punkapi.com/v2/2.png',
		abv: 4.1,
		ph: 4.4,
		volume: {
			value: 20,
			unit: 'litres',
		},
	},
];
