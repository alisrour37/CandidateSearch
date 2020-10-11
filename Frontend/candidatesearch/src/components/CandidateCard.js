import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		minHeight: 250,
	},

	pos: {
		marginBottom: 12,
	},
});

export default function CandidateCard({ name, age, location, salary, description, candidate }) {
	return (
		<div>
			<Card className={classes.root}>
				<CardContent>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<div>
							{candidate.name}, {candidate.age}
						</div>
						<div>{candidate.location}</div>
					</div>
					<Typography className={classes.pos} color='textSecondary'>
						{candidate.salary}
					</Typography>
					<Typography variant='body2' component='p'>
						<br />
						{candidate.description}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
