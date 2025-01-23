import { useState, useEffect } from 'react';

function FetchData() {
	const [data, setData] = useState();
	const [flag, setFlag] = useState(false);

	const fetchApi = () => {
		fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
			.then((response) => response.json())
			.then((jsonData) => {
				setData(jsonData.bpi.USD);
				setFlag(true);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchApi();
	}, []);

	return flag ? (
		<>
			<h1>Current BTC/USD data</h1>
			<p>Code: {data.code}</p>
			<p>Symbol: {data.symbol}</p>
			<p>Rate: {data.rate}</p>
			<p>Description: {data.description}</p>
			<p>Rate Float: {data.rate_float}</p>
		</>
	) : (
		<h1>Data Loading...</h1>
	);
}

export default FetchData;
