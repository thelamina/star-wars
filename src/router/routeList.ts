import {
	Home,
	Login,
	Starships,
	People,
	PageNotFound,
	Species,
} from '../pages';
import { AuthLayout, DashboardLayout } from '../components/templates';
import { PersonDetails } from '../pages/people/PersonDetails';
export const routes = [
	{
		path: '/',
		name: 'Dashboard',
		protected: true,
		component: DashboardLayout,
		children: [
			{
				path: '/',
				component: Home,
			},
			{
				path: 'people',
				component: People,
			},
			{
				path: 'people/:id',
				component: PersonDetails,
			},
			{
				path: 'starships',
				component: Starships,
			},
			{
				path: 'species',
				component: Species,
			},
			{
				path: '*',
				component: PageNotFound,
			},
		],
	},
	{
		path: '/login',
		protected: false,
		component: AuthLayout.withLayout(Login),
	},

	{
		path: '*',
		protected: false,
		component: PageNotFound,
	},
];
