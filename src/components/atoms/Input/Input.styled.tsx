import styled from 'styled-components';

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	padding-bottom: 26px;
	width: 100%;
	&:focus-within {
		label {
			/* font-size: 12px; */
			transform: translate(10px, -10px) scale(0.9);
		}
	}
`;

export const Label = styled('label')<{ active: boolean }>`
	font-size: 0.8rem;
	padding: 0px 10px;
	color: #b0b9c8;
	pointer-events: none;
	position: absolute;
	font-weight: normal;
	/* top: 10px; */
	left: 2px;
	transform: ${(props) =>
		props.active
			? 'translate(10px, -10px) scale(0.9)'
			: 'translate(8px, 14px) scale(1)'};
	background: #fff;
	transform-origin: top left;
	transition: all 0.2s ease-out;
`;

interface IInputElement {
	active: boolean;
	error: string;
}

export const InputElement = styled('input')<IInputElement>`
	width: 100%;
	min-height: 48px;
	padding: 8px 16px;
	outline: 0;
	border-radius: 4px;
	background: #fff;
	font-weight: 400;
	font-size: 0.8rem;
	line-height: 22px;
	color: #0b2253;
	border: ${(props) => {
		if (props.error) {
			return '1px solid #cf0000';
		} else if (props.active) {
			return '1px solid #0A74DC';
		}
		return '1px solid #A4A7B7';
	}};
`;

export const LabelHint = styled.span`
    text-tiny
    text-black-200
`;

export const PasswordElement = styled(InputElement)`
    pr-8
`;
