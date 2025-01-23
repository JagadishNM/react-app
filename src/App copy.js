import './App.css';
import List from './components/List';
import Home from './components/Home';
import BasicForm from './components/BasicForm';
import SignUp from './components/SignUp';
import StateUpdate from './components/StateUpdate';
import Goal from './components/Goal';
import FetchData from './components/FetchData';
import CustomHook from './components/CustomHook';
import UserReducer from './components/UserReducer';
import LiveOrders from './components/LiveOrders';
import Radio from './components/Radio';
import SpreadOperator from './components/SpreadOperator';
import HigherOrderComponents from './components/HigherOrderComponents';
import Cities from './components/Cities';
import RenderProps from './components/RenderProps';
import Tabs from './components/Tabs/Tabs'
import CountUpToFive from './components/CountFive';
import StarRating from './components/StarRating';
import { UserProvider } from './context/UserContext';

import { Link, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<nav>
				<Link to='/'>Home</Link>
				<span> | </span>
				<Link to='/list'>List</Link>
				<span> | </span>
				<Link to='/basic-form'>Basic Form</Link>
				<span> | </span>
				<Link to='/sign-up'>Sign Up</Link>
				<span> | </span>
				<Link to='/state-update'>State Update</Link>
				<span> | </span>
				<Link to='/goal-form'>Goal Form</Link>
				<span> | </span>
				<Link to='/fetch-data'>Fetch Data</Link>
				<span> | </span>
				<Link to='/custom-hook'>Custom Hook</Link>
				<span> | </span>
				<Link to='/use-reducer'>Use Reducer</Link>
				<span> | </span>
				<Link to='/live-orders'>Live Orders</Link>
				<span> | </span>
				<Link to='/radio'>Radio</Link>
				<span> | </span>
				<Link to='spread-operator'>Spread Operator</Link>
				<span> | </span>
				<Link to='higher-order'>Higher Order Component</Link>
				<span> | </span>
				<Link to='render-props'>Render props</Link>
				<span> | </span>
				<Link to='tabs'>Tabs</Link>
				<span> | </span>
				<Link to='count-five'>Count Five</Link>
				<span> | </span>
				<Link to='star-rating'>Star Rating</Link>
			</nav>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='list'
					element={<List />}>
					<Route
						path='cities'
						element={<Cities />}
					/>
				</Route>

				<Route
					path='basic-form'
					element={<BasicForm />}
				/>
				<Route
					path='sign-up'
					element={<SignUp />}
				/>
				<Route
					path='state-update'
					element={<StateUpdate />}
				/>
				<Route
					path='goal-form'
					element={<Goal />}
				/>

				<Route
					path='fetch-data'
					element={<FetchData />}
				/>
				<Route
					path='custom-hook'
					element={<CustomHook />}
				/>
				<Route
					path='use-reducer'
					element={<UserReducer />}
				/>
				<Route
					path='live-orders'
					element={<LiveOrders />}
				/>
				<Route
					path='radio'
					element={<Radio />}
				/>
				<Route
					path='spread-operator'
					element={<SpreadOperator />}
				/>
				<Route
					path='higher-order'
					element={<HigherOrderComponents />}
				/>
				<Route
					path='render-props'
					element={<RenderProps />}
				/>
				<Route path='tabs' element={<Tabs />}/>
				<Route path='count-five' element={<CountUpToFive />}/>
				<Route path='star-rating' element={<StarRating />}/>
			</Routes>
		</div>
	);
}

function Root() {
	return <App />;
}
export default Root;

