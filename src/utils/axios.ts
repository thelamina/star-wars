import axios from 'axios';

const options = {
	baseURL: process.env.REACT_APP_API_BASE_URL,
	headers: {
		Accept: 'application/json,text/plain,*/*',
		'Content-Type': 'application/json',
	},
};

export const request = axios.create(options);
