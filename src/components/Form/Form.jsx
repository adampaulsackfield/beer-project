import './Form.scss';

const Form = ({ formData, setFormData }) => {
	const handleInput = (e) => {
		setFormData({ ...formData, searchTerm: e.target.value.toLowerCase() });
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: !formData[e.target.name] });
	};

	return (
		<form className='form' onSubmit={''}>
			<h2 className='form__header'>Filter</h2>

			<input
				className='form__input'
				type='text'
				name='searchTerm'
				id='search'
				placeholder='Search term...'
				value={formData.searchTerm}
				onChange={handleInput}
			/>

			<label className='form__label' htmlFor='highAbv'>
				High ABV &gt; 6%
				<input
					className='form__checkbox'
					type='checkbox'
					name='highAbv'
					id='highAbv'
					value={formData.highAbv}
					onChange={handleChange}
				/>
			</label>

			<label className='form__label' htmlFor='highAbv'>
				Classic Range
				<input
					className='form__checkbox'
					type='checkbox'
					name='classic'
					id='classic'
					value={formData.classic}
					onChange={handleChange}
				/>
			</label>

			<label className='form__label' htmlFor='highAbv'>
				Acidic ph &lt; 4
				<input
					className='form__checkbox'
					type='checkbox'
					name='acidic'
					id='acidic'
					value={formData.acidic}
					onChange={handleChange}
				/>
			</label>
		</form>
	);
};

export default Form;
