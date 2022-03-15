import React from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import Logo from '../../../assets/icons/logo.png';
import { DashboardLinks } from '../../../constants';

type Props = {
	open: boolean;
	onClose: () => void;
};

export const Sidebar = ({ open }: Props) => {
	const { pathname } = useLocation();

	return (
		<div
			className={`h-screen shadow-lg w-9/12 lg:w-80 max-w-80 transition-opacity  ${
				open ? 'absolute block lg:relative z-50' : 'hidden'
			} lg:block`}
		>
			<div className='bg-[#031434] h-full dark:bg-gray-700'>
				<div className='flex h-24 w-full items-center justify-center'>
					<img
						src={Logo}
						alt='logo'
						className='w-full h-full p-6 object-contain'
					/>
				</div>
				<nav className='mt-2 overflow-auto h-full'>
					<ul>
						<li>
							{DashboardLinks.map((link, index) => {
								return (
									<div
										className='mb-8 px-2'
										key={link.path + index}
									>
										{link.children.map((childLink) => {
											const Icon = childLink.icon;
											const active = matchPath(
												pathname,
												childLink.match
											)?.pattern.end;

											const style = `w-full font-semibold rounded-md text-white flex items-center p-4 my-2 transition-colors duration-200 justify-start ${
												active && 'bg-blue-500'
											}`;
											return (
												<Link
													to={childLink.path}
													key={childLink.title}
												>
													<div className={style}>
														<span className='w-6 flex items-center justify-center mr-3'>
															<Icon />
														</span>
														<p>{childLink.title}</p>
													</div>
												</Link>
											);
										})}
									</div>
								);
							})}
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
