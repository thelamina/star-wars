import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Loader } from '../../../assets/icons/loadingbar.svg';

type Props = {
	variant?: 'primary' | 'secondary' | 'ghost';
	// onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (
		e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
	) => void;
	type?: 'button' | 'submit' | 'reset';
	label?: string;
	labelHint?: string;
	placeholder?: string;
	error?: string | null;
	to?: string;
	isDisabled?: boolean;
	isLoading?: boolean;
	className?: string;
	children?: React.ReactNode;
};

export const Button = ({
	variant = 'primary',
	children,
	type = 'button',
	isLoading,
	isDisabled,
	className,
	to,
	...props
}: Props) => {
	const buttonStyles = `
		py-3 px-4 cursor-pointer font-medium rounded-md flex w-full text-center items-center justify-center transition duration-300 ease-in-out
		${variant === 'primary' && 'bg-[#0A74DC] hover:bg-blue-700 text-white'}
		${variant === 'secondary' && 'bg-gray-500 hover:bg-gray-700 text-white'}
		${variant === 'ghost' && 'bg-transparent text-[#0A74DC] hover:text-blue-700'}
		${isLoading && 'opacity-50'},
		${isDisabled && 'cursor-not-allowed opacity-50'},
		${className}
	`;

	return to ? (
		<Link
			className={buttonStyles}
			to={to}
			// disabled={isLoading || isDisabled}
			{...props}
		>
			<>{children}</>
			{isLoading && <Loader className='h-5 w-5 ml-3 animate-pulse' />}
		</Link>
	) : (
		<button
			type={type}
			className={buttonStyles}
			{...props}
			disabled={isLoading || isDisabled}
		>
			<>{children}</>
			{isLoading && <Loader className='h-5 w-5 ml-3 animate-pulse' />}
		</button>
	);
};
