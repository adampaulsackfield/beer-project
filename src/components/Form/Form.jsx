import './Form.scss';

const Form = ({ isOpen }) => {
	return (
		<form className={`form ${isOpen ? 'show' : ''}`} onSubmit={''}>
			<h2>Filter</h2>

			<input className='form__input' type='text' name='search' id='search' />

			<label className='form__label' htmlFor='highAbv'>
				High ABV &gt; 6%
			</label>
			<input
				className='form__checkbox'
				type='checkbox'
				name='highAbv'
				id='highAbv'
			/>

			<label className='form__label' htmlFor='highAbv'>
				Classic Range
			</label>
			<input
				className='form__checkbox'
				type='checkbox'
				name='classic'
				id='classic'
			/>

			<label className='form__label' htmlFor='highAbv'>
				Acidic ph &lt; 4
			</label>
			<input
				className='form__checkbox'
				type='checkbox'
				name='acidic'
				id='acidic'
			/>
		</form>
	);
};

export default Form;
