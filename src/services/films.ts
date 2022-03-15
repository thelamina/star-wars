import { request } from '../utils';

export const getAllFilms = async (page = 1) => {
	try {
		const url = `/films/?page=${page}`;
		const response = await request.get(url);
		return response?.data;
	} catch (error) {
		// const err = error?.response?.data?.message || error?.message;
		// throw new Error(err);
		console.log(error);
	}
};
