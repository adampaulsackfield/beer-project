import './Beer.scss';

const Beer = ({ beer }) => {
	return (
		<article key={beer.id} className='beer'>
			<img className='beer__img' src={beer.image_url} alt={beer.name} />

			<ul className='beer__info'>
				<li className='beer__info--item'>{beer.abv}%</li>
				<li className='beer__info--item'>
					{beer.volume.value} {beer.volume.unit}
				</li>
				<li className='beer__info--item'>Est: {beer.first_brewed}</li>
			</ul>

			<p className='beer__header'>
				{beer.name}{' '}
				<span className='beer__header--quantity'>
					({beer.volume.value} {beer.volume.unit})
				</span>
			</p>

			<p className='beer__subheader'>{beer.tagline}</p>

			<p className='beer__description'>{beer.description.slice(0, 100)}...</p>

			<button className='beer__button'>ADD TO CART</button>
		</article>
	);
};

export default Beer;
