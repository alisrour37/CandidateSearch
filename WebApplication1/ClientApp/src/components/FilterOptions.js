import { Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import './FilterOptions.css';
export default function FilterOptions({ age, salary, location, setAge, setSalary, setLocation }) {
	const reset = () => {
		setAge(null);
		setSalary(null);
		setLocation(null);
	};
	return (
		<div className='filterRow'>
			<div className='filterBy'>
				<Typography>Filter By:</Typography>
			</div>
			<TextField id='standard-basic' label='Age' placeholder='Choose Age' type='number' value={age} onChange={(event) => setAge(event.target.value)} />
			<TextField id='standard-basic' label='Salary' placeholder='Choose Salary' type='number' value={salary} onChange={(event) => setSalary(event.target.value)} />
			<TextField id='standard-basic' label='Location' placeholder='Choose Location' type='text' value={location} onChange={(event) => setLocation(event.target.value)} />
			<div onClick={() => reset()} className='customButton'>
				Reset Choice
			</div>
		</div>
	);
}
