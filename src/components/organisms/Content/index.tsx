import React from 'react';

export const Content = ({ children }: any) => {
	return (
		<div className='overflow-auto bg-white h-screen pb-24 pt-2 px-4 md:pt-0 md:px-8'>
			<div className='flex flex-col flex-wrap sm:flex-row pt-4'>
				{children}
			</div>
		</div>
	);
};
