import './Navbar.scss';

const Navbar = () => {
	return (
		<aside className='navbar'>
			<header className='navbar__header'>
				<h1>Title</h1>
				<p className='navbar__menu' id='menu'>
					Menu
				</p>
			</header>

			<form className='navbar__form' onSubmit={''}>
				<h2>Filter</h2>

				<input
					className='navbar__form__input'
					type='text'
					name='search'
					id='search'
				/>

				<label className='navbar__form__label' htmlFor='highAbv'>
					High ABV &gt; 6%
				</label>
				<input
					className='navbar__form__checkbox'
					type='checkbox'
					name='highAbv'
					id='highAbv'
				/>

				<label className='navbar__form__label' htmlFor='highAbv'>
					Classic Range
				</label>
				<input
					className='navbar__form__checkbox'
					type='checkbox'
					name='classic'
					id='classic'
				/>

				<label className='navbar__form__label' htmlFor='highAbv'>
					Acidic ph &lt; 4
				</label>
				<input
					className='navbar__form__checkbox'
					type='checkbox'
					name='acidic'
					id='acidic'
				/>
			</form>
		</aside>
	);
};

export default Navbar;
