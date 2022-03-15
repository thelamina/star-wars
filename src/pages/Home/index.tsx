import {
	getAllFilms,
	getAllPeople,
	getAllSpecies,
	getAllStarships,
} from '../../services';
import useSWR from 'swr';
import { useState } from 'react';
import { DashboardCard, Table } from '../../components/organisms';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	const [page, setPage] = useState(1);
	const navigate = useNavigate();
	const { data: filmsData } = useSWR(`/films/?page=${page}`, () =>
		getAllFilms(page)
	);
	const { data: peopleData } = useSWR('/people', () => getAllPeople(page));
	const { data: speciesData } = useSWR('/species', () => getAllSpecies(page));
	const { data: starshipsData } = useSWR('/starships', () =>
		getAllStarships()
	);

	const columns = [
		{
			Header: 'Film Title',
			accessor: 'title',
		},
		{
			Header: 'Release Date',
			accessor: 'release_date',
		},
		{
			Header: 'Director',
			accessor: 'director',
		},
		{
			Header: 'Producer',
			accessor: 'producer',
		},
		{
			Header: 'Episode ID',
			accessor: 'episode_id',
		},
		{
			Header: 'Character',
			accessor: 'url',
		},
	];

	return (
		<div>
			<div className='w-full auto-cols-auto grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-4'>
				<DashboardCard
					title='Films'
					subtitle='20 More than than yesterday'
					count={filmsData?.count}
					icon='film'
					isLoading={!filmsData}
				/>
				<DashboardCard
					title='Starship'
					subtitle='20 More than than yesterday'
					count={starshipsData?.count}
					icon='starship'
					isLoading={!starshipsData}
				/>
				<DashboardCard
					title='People'
					subtitle='20 More than than yesterday'
					count={peopleData?.count}
					icon=' '
					isLoading={!peopleData}
				/>
				<DashboardCard
					title='Species'
					subtitle='20 More than than yesterday'
					count={speciesData?.count}
					icon='species'
					isLoading={!speciesData}
				/>
			</div>
			<div className='mt-8'>
				<h4 className='text-[#A4A7B7]'>Films</h4>

				<Table
					loading={!filmsData}
					columns={columns}
					data={filmsData?.results}
					onRowClick={(row) => {
						const id = row.url
							.replace(/\D+/g, ' ')
							.trim()
							.split(' ')
							.map((e: any) => parseInt(e))[0];
						navigate(`/films/${id}`);
					}}
					gotoNextPage={() => setPage(page + 1)}
					gotoPage={(page) => setPage(page)}
					gotoPrevPage={() => setPage(page - 1)}
					pagination={{
						total: filmsData?.count,
						per_page: 10,
						page,
					}}
				/>
			</div>
		</div>
	);
};
