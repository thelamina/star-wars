import { getAllPeople } from '../../services';
import useSWR from 'swr';
import { Table } from '../../components/organisms';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const People = () => {
	const [page, setPage] = useState(1);
	const navigate = useNavigate();
	const { data: peopleData } = useSWR(`/api/people/?page=${page}`, () =>
		getAllPeople(page)
	);

	const columns = [
		{
			Header: 'Name',
			accessor: 'name',
		},
		{
			Header: 'Birth year',
			accessor: 'birth_year',
		},
		{
			Header: 'Gender',
			accessor: 'gender',
		},
		{
			Header: 'Hair Color',
			accessor: 'hair_color',
		},
		{
			Header: 'Height',
			accessor: 'height',
		},
		{
			Header: 'Created',
			accessor: 'created',
		},
	];

	return (
		<div>
			<div className='mt-2'>
				<h4 className='text-[#A4A7B7]'>People</h4>

				<Table
					loading={!peopleData}
					columns={columns}
					onRowClick={(row) => {
						const id = row.url
							.replace(/\D+/g, ' ')
							.trim()
							.split(' ')
							.map((e: any) => parseInt(e))[0];
						navigate(`/people/${id}`);
					}}
					data={peopleData?.results}
					gotoNextPage={() => setPage(page + 1)}
					gotoPage={(page) => setPage(page)}
					gotoPrevPage={() => setPage(page - 1)}
					pagination={{
						total: peopleData?.count,
						per_page: 10,
						page: page,
					}}
				/>
			</div>
		</div>
	);
};
