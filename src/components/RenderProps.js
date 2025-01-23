import { useState, useEffect } from 'react';

const MousePosition = ({ render }) => {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const handleMousePositionChange = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMousePositionChange);

		return () => {
			window.removeEventListener('mousemove', handleMousePositionChange);
		};
	}, []);

	return render({ mousePosition });
};

const PanelPositionLogger = () => {
	return (
		<div className='box'>
			<MousePosition
				render={({ mousePosition }) => (
					<div className='Row'>
						<span>x: {mousePosition.x}</span>
						<span>y: {mousePosition.y}</span>
					</div>
				)}
			/>
		</div>
	);
};

const PointPositionLogger = () => {
	return (
		<div className='panel'>
			<MousePosition
				render={({ mousePosition }) => (
					<div className='Row'>
						<span>x: {mousePosition.x}</span>
						<span>y: {mousePosition.y}</span>
					</div>
				)}
			/>
		</div>
	);
};

export default function RenderProps() {
	return (
		<>
			<h1>Higher Order Component Mouse Position</h1>
			<PanelPositionLogger />
			<PointPositionLogger />
		</>
	);
}
