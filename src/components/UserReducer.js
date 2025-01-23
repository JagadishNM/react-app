import { useReducer } from 'react';

const reducer = (state, action) => {
	if (action.type === 'buy') return { money: state.money - 10 };
	if (action.type === 'serve') return { money: state.money + 10 };
	return state;
};

function UserReducer() {
	const initialState = { money: 100 };

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h2>Wallet Balance: {state.money}</h2>
			<button onClick={() => dispatch({ type: 'buy' })}>
				Buying Veggies
			</button>
			<button onClick={() => dispatch({ type: 'serve' })}>
				Serving Meals
			</button>
		</div>
	);
}

export default UserReducer;
