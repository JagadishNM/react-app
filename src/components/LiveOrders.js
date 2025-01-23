import React from 'react';

const Row = ({ children, color }) => {
	const styleElement = {
		color: color,
	};
	return (
		<>
			{React.Children.map(children, (child, index) => {
				return React.cloneElement(child, {
					style: {
						...child.props.style,
						...(index > 0 ? styleElement : {}),
					},
				});
			})}
		</>
	);
};

export default function LiveOrders() {
	return (
		<Row color={'red'}>
			<p>Pizza</p>
			<p>Price:</p>
			<p>20$</p>
		</Row>
	);
}
