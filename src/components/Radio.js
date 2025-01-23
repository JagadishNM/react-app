import React from 'react';

const RadioGroup = ({ onChange, selected, children }) => {
	const RadioOptions = React.Children.map(children, (child) => {
		return React.cloneElement(child, {
			onChange,
			checked: child.props.value === selected,
		});
	});

	return <div className='RadioGroup'>{RadioOptions}</div>;
};

const RadioOption = ({ value, checked, onChange, children }) => {
	return (
		<div className='RadioOption'>
			<input
				type='radio'
				id={value}
				name={value}
				value={value}
				checked={checked}
				onChange={(e) => onChange(e.target.value)}
			/>
			<label htmlFor={value}>{children}</label>
		</div>
	);
};

function Radio() {
	const valuesArray = [
		{ value: 'social_media', content: 'Social Media' },
		{ value: 'friends', content: 'Friends' },
		{ value: 'advertising', content: 'advertising' },
		{ value: 'other', content: 'other' },
	];
	const [selected, setSelected] = React.useState('');
	return (
		<div className='App'>
			<h2>How did you hear about Little Lemon?</h2>
			<RadioGroup
				onChange={setSelected}
				selected={selected}>
				{valuesArray.map((radioButtons) => (
					<RadioOption
						key={radioButtons.value}
						value={radioButtons.value}>
						{radioButtons.content}
					</RadioOption>
				))}
			</RadioGroup>
			<button disabled={!selected}>Submit</button>
		</div>
	);
}

export default Radio;
