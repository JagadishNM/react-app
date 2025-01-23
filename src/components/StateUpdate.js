import { useState } from 'react';

function StateUpdate() {
	const [greeting, setGreet] = useState({
		greet: 'Hello',
		place: 'World',
	});

	const handleState = () => {
		setGreet((prevState) => {
			return { ...prevState, place: 'World Wide Web!' };
		});
	};

	return (
		<>
			<h2>
				{greeting.greet}, {greeting.place}
			</h2>
			<button onClick={handleState}>Change State</button>
		</>
	);
}

export default StateUpdate;
