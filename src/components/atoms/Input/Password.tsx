import {
	PasswordElement,
	InputWrapper,
	Label,
	LabelHint,
} from './Input.styled';

type Props = {
	name?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	label?: string;
	labelHint?: string;
	placeholder?: string;
	error?: string | null;
	value?: string;
	isDisabled?: boolean;
	className?: string;
};

export const Password = ({
	name,
	onChange,
	className,
	isDisabled,
	error = '',
	value,
	label,
	labelHint,
	placeholder,
	...props
}: Props) => {
	error = error ? error.toString() : '';
	return (
		<InputWrapper className={className}>
			<div className='relative'>
				<PasswordElement
					error={error}
					active={value !== ''}
					type='password'
					// type={visible ? 'text' : 'password'}
					name={name}
					onChange={onChange}
					value={value}
					disabled={isDisabled}
					autoComplete='off'
					{...props}
				/>
			</div>
			{placeholder && (
				<Label active={value !== ''}>
					{placeholder} <LabelHint>{labelHint}</LabelHint>
				</Label>
			)}
			{error && (
				<div className='block px-2 pt-2 text-sm text-red-400 pb-0'>
					{error}
				</div>
			)}
		</InputWrapper>
	);
};
