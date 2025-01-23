const Button = ({ type, children, ...buttonProps }) => {
	return (
		<button
			className={type}
			{...buttonProps}>
			{children}
		</button>
	);
};

export default function SpreadOperator() {
	return (
		<>
			<Button
				className='primary'
				onClick={() => alert('Login clicked!')}>
				Login
			</Button>
			<Button
				type='secondary'
				onClick={() => alert('Sign Up clicked!')}>
				Sign Up
			</Button>
		</>
	);
}
