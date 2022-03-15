import { SWRConfig } from 'swr';
import { Router } from './router';
import { request } from './utils';

const App = () => {
	const fetcher = async (url: string) => {
		try {
			const response = await request.get(url);
			return response.data;
		} catch (error) {
			// throw Error(error?.message);
		}
	};
	return (
		<SWRConfig
			value={{
				// refreshInterval: 3000,
				fetcher: async (resource, init) => {
					fetcher(resource);
				},
			}}
		>
			<Router />
		</SWRConfig>
	);
};
export default App;
