import React from 'react';
import { Skeleton } from '../../atoms';
import { Card } from '../../molecules';

type Props = {
	isLoading: boolean;
	icon: string;
	title: string;
	subtitle: string;
	count: number;
};

export const DashboardCard = ({
	isLoading,
	icon,
	title,
	count,
	subtitle,
}: Props) => {
	return isLoading ? (
		<SkeletonLoader />
	) : (
		<Card>
			<div className='flex items-center justify-between mb-6'>
				<p className='font-semibold'>{title}</p>

				<div className='w-6 h-6 rounded-md bg-[#A9FFE0]' />
			</div>
			<p className='font-bold pb-1'>{count}</p>
			<p className='text-sm text-[#00992B]'>{subtitle}</p>
		</Card>
	);
};

const SkeletonLoader = () => {
	return (
		<Card>
			<div className='flex items-center justify-between mb-8'>
				<Skeleton className='w-3/12 h-6' />
				<Skeleton className='w-6 h-6' />
			</div>
			<Skeleton className='mb-2 w-8' />
			<Skeleton className='w-8/12' />
		</Card>
	);
};
