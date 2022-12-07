import './Form.scss';

const Form = ({ isOpen }) => {
	return (
		<form className={`form ${isOpen ? 'form--show' : ''}`} onSubmit={''}>
			<h2 className='form__header'>Filter</h2>

			<input
				className='form__input'
				type='text'
				name='search'
				id='search'
				placeholder='Search term...'
			/>

			<label className='form__label' htmlFor='highAbv'>
				High ABV &gt; 6%
				<input
					className='form__checkbox'
					type='checkbox'
					name='highAbv'
					id='highAbv'
				/>
			</label>

			<label className='form__label' htmlFor='highAbv'>
				Classic Range
				<input
					className='form__checkbox'
					type='checkbox'
					name='classic'
					id='classic'
				/>
			</label>

			<label className='form__label' htmlFor='highAbv'>
				Acidic ph &lt; 4
				<input
					className='form__checkbox'
					type='checkbox'
					name='acidic'
					id='acidic'
				/>
			</label>
		</form>
	);
};

export default Form;
