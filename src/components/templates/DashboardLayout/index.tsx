import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, Header, Content } from '../../organisms';
type Props = {
	children?: React.ReactNode;
	title?: string;
	subtitle?: string;
};

export const DashboardLayout = ({ children }: Props) => {
	const [open, setOpen] = useState(false);
	const toggleSidebar = () => setOpen(!open);
	return (
		<div className='bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative'>
			<div className='flex items-start'>
				<Sidebar open={open} onClose={toggleSidebar} />
				<div className={`w-full pl-0 md:space-b-4`}>
					<div
						className={`${
							open &&
							'h-screen w-full lg:hidden block absolute bg-[#9694a1f3] backdrop-blur'
						}`}
						onClick={toggleSidebar}
					/>
					<Header toggleMenu={toggleSidebar} />
					<Content>
						<Outlet />
					</Content>
				</div>
			</div>
		</div>
	);
};

const withDashboardLayout =
	(Component: React.ComponentType<any>) => (props: any) =>
		(
			<DashboardLayout>
				<Component {...props} />
			</DashboardLayout>
		);

DashboardLayout.withLayout = withDashboardLayout;
