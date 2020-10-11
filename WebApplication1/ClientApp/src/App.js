import React, { useState, useEffect } from 'react';
import candidatesService from './services/CandidateService';
import './App.css';
import CandidateCard from './components/CandidateCard';
import FilterOptions from './components/FilterOptions';
import { Grid } from '@material-ui/core';

function App() {
	const [data, setData] = useState([]);
	const [age, setAge] = useState('');
	const [salary, setSalary] = useState('');
	const [location, setLocation] = useState('');
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		candidatesService
			.getCandidates(age, salary, location)
			.then((res) => setData(res.data))
			.finally(setLoading(false));
	}, [age, salary, location]);
	if (loading) return <div className='loading'>Please Wait</div>;
	return (
		<div className='App'>
			<div style={{ display: 'block' }}>
				<FilterOptions age={age} setAge={setAge} location={location} setLocation={setLocation} salary={salary} setSalary={setSalary} />
			</div>
			<header className='App-header'>
				<Grid container spacing={10} style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '5%' }}>
					{data.length > 0 ? (
						data.map((candidate) => (
							<Grid item>
								<CandidateCard key={candidate.id} candidate={candidate} />
							</Grid>
						))
					) : (
						<Grid item xs={12} className='noExist'>
							No Candidates Exist
						</Grid>
					)}
				</Grid>
			</header>
		</div>
	);
}

export default App;
