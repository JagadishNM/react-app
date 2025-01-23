import { useState } from 'react';

function BasicForm() {
	const [name, setName] = useState('');

	const handlerSubmit = (e) => {
		e.preventDefault();
		console.log(name);
		setName('');
	};
	return (
		<div className='basic-form'>
			<form>
				<label htmlFor='nameField'>Name : </label>
				<input
					type='text'
					id='nameField'
					name='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<button
					disabled={!name}
					type='submit'
					onClick={handlerSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default BasicForm;
