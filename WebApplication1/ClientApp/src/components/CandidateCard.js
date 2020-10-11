import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		minHeight: 300,
		maxWidth: 275,
		fontFamily: 'Sumana',
		color: '#222b6b',
	},
	name: {
		marginBottom: '10px',
	},
	location: {
		fontSize: '18px',
	},
	description: {
		fontSize: '14px',
		color: 'black',
	},
});

export default function CandidateCard({ candidate }) {
	const classes = useStyles();
	return (
		<div>
			<Card className={classes.root}>
				<CardContent>
					<div>
						{candidate.name}, {candidate.age}
					</div>
					<div className={classes.location}>Location: {candidate.location}</div>
					<div className={classes.location}>Salary Expectation: {candidate.salary}$</div>
					<Typography variant='body2' component='p' className={classes.description}>
						<br />
						Description: {candidate.description}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
