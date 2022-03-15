import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';
import { ReactComponent as StarshipIcon } from '../assets/icons/starship.svg';
import { ReactComponent as PeopleIcon } from '../assets/icons/people.svg';
import { ReactComponent as SpeciesIcon } from '../assets/icons/species.svg';

export const DashboardLinks = [
	{
		path: '/',
		children: [
			{
				match: '/',
				path: '/',
				title: 'Dashboard',
				icon: DashboardIcon,
			},
		],
	},

	{
		path: '/',
		children: [
			{
				match: `/starships`,
				path: '/starships',
				title: 'Starships',
				icon: StarshipIcon,
			},
			{
				match: `/people`,
				path: `/people`,
				title: 'People',
				icon: PeopleIcon,
			},
			{
				match: `/species`,
				path: '/species',
				title: 'Species',
				icon: SpeciesIcon,
			},
		],
	},
];
