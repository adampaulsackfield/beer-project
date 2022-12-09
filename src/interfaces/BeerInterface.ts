export interface BeerInterface {
	id: number;
	image_url: string;
	name: string;
	abv: number;
	volume: {
		value: number;
		unit: string;
	};
	tagline: string;
	description: string;
	first_brewed: string;
	ph: number;
}
