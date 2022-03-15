import React from 'react';
import Logo from '../../../assets/icons/logo.png';

type Props = {
	children: React.ReactNode;
	title?: string;
	subtitle?: string;
};

export const AuthLayout = ({ children }: Props) => (
	<div className='w-full flex sm:flex-row overflow-auto sm:overflow-hidden flex-col justify-between min-h-screen sm:h-screen'>
		<div className='sm:h-full h-28 sm:w-1/3 w-full bg-primary flex items-center justify-center'>
			<img
				src={Logo}
				alt='logo'
				className='w-full p-8 h-full object-contain'
			/>
		</div>
		<div className='flex flex-1 justify-center items-center p-3 sm:p-10 lg:p-24 sm:min-h-screen sm:overflow-y-auto overflow-hidden relative'>
			{children}
		</div>
	</div>
);

const withAuthLayout = (Component: React.ComponentType<any>) => (props: any) =>
	(
		<AuthLayout>
			<Component {...props} />
		</AuthLayout>
	);

AuthLayout.withLayout = withAuthLayout;
