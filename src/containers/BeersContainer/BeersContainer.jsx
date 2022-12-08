import data from '../../assets/data';
import Beer from '../../components/Beer/Beer';

import './BeersContainer.scss';

const BeersContainer = ({ formData }) => {
	// const filtered = data.filter(({ role, name }) => {
	// 	return (
	// 		role.includes('selectedRole') &&
	// 		name.toLowerCase().includes(params.searchTerm)
	// 	);
	// });

	const filtered = data.filter((beer) => {
		return beer.name.toLowerCase().includes(formData.searchTerm);
	});

	return (
		<section className='beers'>
			<p className='beers__header'>See our selection of quality beers</p>

			{filtered &&
				filtered.map((beer) => {
					console.log(beer);
					return <Beer beer={beer} />;
				})}
		</section>
	);
};

export default BeersContainer;
