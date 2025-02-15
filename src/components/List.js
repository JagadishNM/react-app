import { Outlet } from 'react-router-dom';

function List() {
	const desserts = [
		{
			name: 'Chocolate Cake',
			calories: 400,
			createdAt: '2022-09-01',
		},
		{
			name: 'Ice Cream',
			calories: 200,
			createdAt: '2022-01-02',
		},
		{
			name: 'Tiramisu',
			calories: 300,
			createdAt: '2021-10-03',
		},
		{
			name: 'Cheesecake',
			calories: 600,
			createdAt: '2022-01-04',
		},
	];

	const deserLlist = desserts
		.filter((list) => list.calories < 500)
		.sort((a, b) => a.calories - b.calories);
	const showList = deserLlist.map((ls) => {
		const item = `${ls.name} - ${ls.calories} cal`;
		return <li key={ls.createdAt}>{item}</li>;
	});

	return (
		<>
			<Outlet />
			<ul>{showList}</ul>
		</>
	);
}

export default List;
