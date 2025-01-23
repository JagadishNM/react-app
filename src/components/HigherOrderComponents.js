import { useState, useEffect } from 'react';

const withMousePosition = (WrappedComponent) => {
	return (props) => {
		const [data, setData] = useState({
			x: 0,
			y: 0,
		});

		useEffect(() => {
			const handleEvent = (e) => {
				setData({ x: e.clientX, y: e.clientY });
			};

			window.addEventListener('mousemove', handleEvent);
			return () => {
				window.removeEventListener('mousemove', handleEvent);
			};
		}, []);
		return (
			<WrappedComponent
				{...props}
				mousePosition={data}
			/>
		);
	};
};

const PanelPositionLogger = ({ mousePosition }) => {
	return (
		<div className='box'>
			<p>X : {mousePosition.x}</p>
			<p>Y : {mousePosition.y}</p>
		</div>
	);
};

const PointPositionLogger = ({ mousePosition }) => {
	return (
		<div className='panel'>
			<p>{mousePosition.x}</p>
			<p>{mousePosition.y}</p>
		</div>
	);
};

const PanelPosition = withMousePosition(PanelPositionLogger);
const PointPosition = withMousePosition(PointPositionLogger);

export default function HigherOrderComponents() {
	return (
		<>
			<h1>Higher Order Component Mouse Position</h1>
			<PanelPosition />
			<PointPosition />
		</>
	);
}
