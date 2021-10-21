// import React from 'react';
// import { Counter } from './features/counter/Counter'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/node_modules/@mui/system';
import './App.css';
import { theme } from './theme';
import FlowOne from './pages/FlowOne';
import FlowTwo from './pages/FlowTwo';
import FlowThree from './pages/FlowThree';
import FlowFour from './pages/FlowFour';
import FlowFive from './pages/FlowFive';
import FlowSix from './pages/FlowSix';
import Layout from './components/Layout';
import Detail from './pages/Detail';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Layout>
					<Switch>
						<Route exact path='/' component={FlowOne} />
						<Route exact path='/flowTwo' component={FlowTwo} />
						<Route exact path='/flowThree' component={FlowThree} />
						<Route exact path='/flowFour' component={FlowFour} />
						<Route exact path='/flowFive' component={FlowFive} />
						<Route exact path='/flowSix' component={FlowSix} />
						<Route path='/detail/:id' component={Detail} />
					</Switch>
				</Layout>
			</Router>
		</ThemeProvider>
	);
}

export default App;
