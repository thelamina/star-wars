import { InputElement, InputWrapper, Label, LabelHint } from './Input.styled';
import { Password } from './Password';

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

export const Input = ({
	type,
	className,
	label,
	error = '',
	isDisabled,
	name,
	labelHint,
	placeholder,
	value,
	onChange,
	...props
}: Props) => {
	error = error ? error.toString() : '';

	return (
		<InputWrapper className={className}>
			<InputElement
				error={error}
				active={value !== ''}
				type={type}
				name={name}
				disabled={isDisabled}
				value={value}
				onChange={onChange}
				autoComplete='off'
				{...props}
			/>
			{placeholder && (
				<Label
					// error={error}
					active={value !== ''}
				>
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

Input.Password = Password;
