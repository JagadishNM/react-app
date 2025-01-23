import React from 'react';

function GoalForm(props) {
	const [form, setForm] = React.useState({ goal: '', by: '' });

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function submitGoal(e) {
		e.preventDefault();
		props.onAdd(form);
		setForm({ goal: '', by: '' });
	}
	return (
		<div>
			<h1>My Little Lemon Goals</h1>
			<form onSubmit={submitGoal}>
				<input
					type='text'
					name='goal'
					value={form.goal}
					onChange={handleChange}
				/>
				<input
					type='date'
					name='by'
					value={form.by}
					onChange={handleChange}
				/>
				<button>Submit Goal</button>
			</form>
		</div>
	);
}

function ListofGoals(props) {
	return (
		<ul>
			{props.goalsList.map((g) => (
				<li key={g.by}>
					My Goal is to {g.goal} by {g.by}
				</li>
			))}
		</ul>
	);
}

export default function Goal() {
	const [allGoals, updateAllGoals] = React.useState([]);
	function addGoal(goal) {
		updateAllGoals([...allGoals, goal]);
	}
	return (
		<div>
			<GoalForm onAdd={addGoal} />
			<ListofGoals goalsList={allGoals} />
		</div>
	);
}
