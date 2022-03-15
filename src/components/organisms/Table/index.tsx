import React from 'react';
import { useTable } from 'react-table';
import {
	TableStyles,
	Th,
	Td,
	PaginationStyles,
	PageButton,
} from './Table.styled';
import { Skeleton } from '../../atoms';
import { Link } from 'react-router-dom';

interface TableProps {
	columns: any;
	data: any;
	loading: boolean;
	onRowClick?: (row: any) => void;
	gotoPrevPage?: () => void;
	gotoNextPage?: () => void;
	gotoPage?: (page: number) => void;
	pagination: {
		total: number;
		per_page: number;
		page: number;
	};
}

export const Table = ({
	loading,
	columns,
	data,
	pagination = {
		total: 0,
		page: 0,
		per_page: 0,
	},
	onRowClick = () => {},
	gotoPrevPage = () => {},
	gotoNextPage = () => {},
	gotoPage = () => {},
}: TableProps) => {
	const tableData = React.useMemo(
		() => (loading ? Array(8).fill({}) : data),
		[loading, data]
	);
	const tableColumns = React.useMemo(
		() =>
			loading
				? columns.map((column: any) => ({
						...column,
						Cell: <Skeleton className='' />,
				  }))
				: columns,
		[loading, columns]
	);
	// Use the state and functions returned from useTable to build your UI
	let showBeforeDot = false;
	let showAfterDot = false;
	const paging = Math.round(pagination?.total / pagination.per_page);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns: tableColumns,
			data: tableData,
		});
	// console.log(data);
	// Render the UI for your table
	return (
		<div className='mt-6'>
			<TableStyles>
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => {
									return (
										<Th
											webOnly={false}
											{...column.getHeaderProps()}
										>
											{' '}
											{column.render('Header')}
										</Th>
									);
								})}
							</tr>
						))}
					</thead>

					{
						<tbody {...getTableBodyProps()}>
							{rows.map((row: any) => {
								prepareRow(row);
								return (
									<tr
										className={'cursor-pointer'}
										onClick={() => {
											onRowClick(row.original);
										}}
										{...row.getRowProps()}
									>
										{row.cells.map((cell: any) => {
											if (
												cell.column.Header ===
												'Character'
											) {
												return (
													<Td
														{...cell.getCellProps()}
														webOnly={false}
													>
														<Link
															to={cell.render(
																'Cell'
															)}
														>
															{cell.render(
																'Cell'
															)}
														</Link>
													</Td>
												);
											} else
												return (
													<Td
														webOnly={false}
														{...cell.getCellProps()}
													>
														{cell.render('Cell')}
													</Td>
												);
										})}
									</tr>
								);
							})}
						</tbody>
					}
				</table>

				{/* {data.length < 1 && (
					<TableInfoRow> Opps! data seems to be empty</TableInfoRow>
				)} */}
			</TableStyles>
			{paging > 1 && (
				<PaginationStyles>
					<button
						onClick={() => pagination.page > 1 && gotoPrevPage()}
					>
						Prev
					</button>
					{Array.from(Array(paging)?.keys()).map((index) => {
						const shouldShow =
							[0, 1, paging - 2, paging - 1].includes(index) ||
							index === pagination.page - 1;

						if (shouldShow) {
							return (
								<PageButton
									onClick={() => {
										index >= 0 &&
											index < paging &&
											gotoPage(index + 1);
									}}
									active={index + 1 === pagination?.page}
								>
									{index + 1}
								</PageButton>
							);
						}

						if (!showBeforeDot && index < pagination.page - 1) {
							showBeforeDot = true;
							return '...';
						}
						if (!showAfterDot && index > pagination.page - 1) {
							showAfterDot = true;
							return '...';
						}

						return null;
					})}
					<button
						onClick={() => {
							pagination.page < paging && gotoNextPage();
						}}
					>
						Next
					</button>
				</PaginationStyles>
			)}
		</div>
	);
};
