import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Avatar } from '../../../assets/icons/avatar.svg';
import { ReactComponent as Notification } from '../../../assets/icons/bell.svg';
import { useStore } from '../../../store';

type Props = {
	children?: React.ReactNode;
	navigate?: string;
	toggleMenu: () => void;
};

export const Header = ({ navigate, toggleMenu }: Props) => {
	const { user } = useStore();
	return (
		<header className='w-full shadow-lg bg-white  h-16 z-30'>
			<div className='relative shadow-md flex flex-col justify-center h-full px-3 mx-auto flex-center'>
				<div className='relative items-center justify-between pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0'>
					<div className='flex left-0 z-50'>
						{navigate && <Link to='-1'>{'<'} Back</Link>}
						<button
							className='lg:hidden inline-block outline-none text-xs text-gray-400 font-semibold bg-transparent border-0'
							onClick={toggleMenu}
						>
							Menu
						</button>
					</div>
					<div className='p-1 flex items-center ml-5 mr-4 sm:mr-0 sm:right-auto'>
						<Link
							to='as'
							className='flex items-center  h-4 w-4 mr-3'
						>
							<Notification className='mx-auto object-cover' />
						</Link>
						<div className='h-8 mx-4 w-[1px] bg-[#E5E5E5]' />
						<Link
							to='as'
							className='inline-flex w-full items-center min-w-max'
						>
							<Avatar className='mx-auto object-cover rounded-full h-8 w-8 mr-3' />
							<p className='text-[#303B54] text-sm'>
								{user.email}
							</p>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};
