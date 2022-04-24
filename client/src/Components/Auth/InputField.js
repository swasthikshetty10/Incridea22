import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { Input } from './StyledComponentsLogin';

const InputField = ({ placeholder, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<Input
				placeholder={placeholder}
				autocomplete='off'
				className={`form-control ${
					meta.touched && meta.error ? 'is-invalid' : ''
				}`}
				{...field}
				{...props}
			/>
			<ErrorMessage
				component='div'
				name={field.name}
				className='invalid-feedback'
			/>
		</>
	);
};

export default InputField;
