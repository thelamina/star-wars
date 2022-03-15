import React from 'react';

export const Skeleton = ({ className }: any) => {
	return <div className={`h-4 w-full rounded bg-gray-200 animate-pulse ${className}`} />;
};
