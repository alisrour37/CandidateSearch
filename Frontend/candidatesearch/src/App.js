import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

import './App.css';
import CandidateCard from './components/CandidateCard';

function App() {
	const [data, setData] = useState(initialState);

	useEffect(() => {
		effect;
		return () => {
			cleanup;
		};
	}, [input]);
	return (
		<div className='App'>
			<CandidateCard></CandidateCard>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Grid container spacing={3}>
					{data.length > 0 ? (
						data.map((candidate) => (
							<Grid item>
								<CandidateCard candidate={candidate} />
							</Grid>
						))
					) : (
						<div className='noExist'> No Candidates Exist </div>
					)}
				</Grid>
			</header>
		</div>
	);
}

export default App;
