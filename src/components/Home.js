import FeedBackForm from './FeedBackForm';
function Home() {
	const handleSubmit = () => {
		console.log('Form submitted!');
	};

	return (
		<>
			<FeedBackForm onSubmit={handleSubmit} />
		</>
	);
}

export default Home;
