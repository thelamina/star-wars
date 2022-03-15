import React from 'react';

type Prop = {
	children: React.ReactNode;
};

export const Card = ({ children }: Prop) => {
	return (
		<div className=' bg-white rounded-lg shadow-xl py-6 px-4 w-full'>
			{children}
		</div>
	);
};
