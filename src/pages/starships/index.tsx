import { getAllStarships } from '../../services';
import useSWR from 'swr';
import { Table } from '../../components/organisms';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Starships = () => {
	const [page, setPage] = useState(1);
	const navigate = useNavigate();
	const { data: starshipsData } = useSWR(`/api/starships/?page=${page}`, () =>
		getAllStarships(page)
	);

	const columns = [
		{
			Header: 'Name',
			accessor: 'name',
		},
		{
			Header: 'Model',
			accessor: 'model',
		},
		{
			Header: 'Class',
			accessor: 'starship_class',
		},
		{
			Header: 'Passenger',
			accessor: 'passengers',
		},
		{
			Header: 'Length',
			accessor: 'length',
		},
		{
			Header: 'Character',
			accessor: 'url',
		},
	];

	return (
		<div>
			<div className='mt-2'>
				<h4 className='text-[#A4A7B7]'>Starships</h4>

				<Table
					loading={!starshipsData}
					columns={columns}
					data={starshipsData?.results}
					onRowClick={(row) => {
						const id = row.url
							.replace(/\D+/g, ' ')
							.trim()
							.split(' ')
							.map((e: any) => parseInt(e))[0];
						navigate(`/starships/${id}`);
					}}
					gotoNextPage={() => setPage(page + 1)}
					gotoPage={(page) => setPage(page)}
					gotoPrevPage={() => setPage(page - 1)}
					pagination={{
						total: starshipsData?.count,
						per_page: 10,
						page,
					}}
				/>
			</div>
		</div>
	);
};
