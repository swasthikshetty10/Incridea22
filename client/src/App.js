import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Event2 from './Components/Event2';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Sponsor from './Components/Sponsor/index';
import Profile from './Components/Profile';
import Team from './Components/Team/index';
// import Sponsor from "./Components/Sponsor";
import PaymentStatus from './Components/Payments/PaymentStatus';

import LoginForm from './Components/Auth/LoginForm';
import ForgotPass from './Components/Auth/ForgotPass';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInput from './Components/Auth/UserInput';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

function App() {
	return (
		<ChakraProvider>
			<div className='App '>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/events' element={<Event2 />} />
					<Route exact path='/gallery' element={<Gallery />} />
					<Route exact path='/Sponsors' element={<Sponsor />} />
					<Route exact path='/profile' element={<Profile />} />
					<Route exact path='/team' element={<Team />} />
					<Route path='/login' element={<LoginForm />} />
					<Route path='/userinput' element={<UserInput />} />
					<Route path='/forgot' element={<ForgotPass />} />
					<Route exact path='/status/:orderId' element={<PaymentStatus />} />
				</Routes>
			</div>
		</ChakraProvider>
	);
}

export default App;
