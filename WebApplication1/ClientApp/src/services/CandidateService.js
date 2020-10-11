import axios from 'axios';

function getCandidates(age, salary, location) {
	let req = axios.get(`https://localhost:44323/api/Candidates?age=${age}&salary=${salary}&location=${location}`);
	return req;
}
const candidatesService = {
	getCandidates,
};
export default candidatesService;
