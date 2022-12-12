import React, { ReactElement } from 'react';

// Interfaces
import { FormInterface } from '../../interfaces/FormInterface';

// React Icons
import { CiPercent } from 'react-icons/ci';
import { GiTopHat, GiAcid } from 'react-icons/gi';

// Styles
import './Form.scss';

type FormProps = {
	formData: FormInterface;
	setFormData: React.Dispatch<React.SetStateAction<FormInterface>>;
};

const Form: React.FC<FormProps> = ({ formData, setFormData }): ReactElement => {
	// Single handler for multiple checkboxes, by using bracket notation to find object keys. Spread operator has been used to preserve the key/value pairs that are not being changed.
	const handleChange = (e): void => {
		setFormData({ ...formData, [e.target.name]: !formData[e.target.name] });
	};

	// Handles the user typing into the input.
	const handleInput = (e): void => {
		setFormData({ ...formData, searchTerm: e.target.value.toLowerCase() });
	};

	return (
		<form className='form'>
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
				<p className='form__label--text'>High ABV &gt; 6% </p>

				<CiPercent className='form__label--icon' />

				<input
					className='form__checkbox'
					type='checkbox'
					name='highAbv'
					id='highAbv'
					onChange={handleChange}
				/>
			</label>

			<label className='form__label' htmlFor='classic'>
				<p className='form__label--text'>Classic Range</p>

				<GiTopHat className='form__label--icon' />

				<input
					className='form__checkbox'
					type='checkbox'
					name='classic'
					id='classic'
					onChange={handleChange}
				/>
			</label>

			<label className='form__label' htmlFor='acidic'>
				<p className='form__label--text'>Acidic ph &lt; 4</p>

				<GiAcid className='form__label--icon' />

				<input
					className='form__checkbox'
					type='checkbox'
					name='acidic'
					id='acidic'
					onChange={handleChange}
				/>
			</label>
		</form>
	);
};

export default Form;
