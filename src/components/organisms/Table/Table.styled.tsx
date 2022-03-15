import styled from 'styled-components';

export const TableStyles = styled.div`
	z-index: 1;
	background-color: white;
	border-radius: 0.5em;
	height: fit-content;
	border: 1px solid rgba(164, 167, 183, 0.4);
	/* width: 100%; */
	table {
		table-layout: fixed;
		z-index: 1;
		border-spacing: 0;
		width: 100%;
		box-sizing: border-box;
		border-collapse: collapse;
		border-radius: 0.5em;
		tbody > tr {
            padding: 0.5em;
			&:hover {
				transition: all 0.2s ease-in-out;
				background-color: #fff;
				box-shadow: 0px 0px 30px rgba(13, 47, 161, 0.07);
			}
		}
		th {
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 18px;
			color: #a4a7b7;
		}
		td {
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			color: #434854;
			line-height: 24px;
			border-top: 1px solid #e5e5e5;
		}
		th,
		td {
			text-align: left;
			margin: 0;
			padding: 16px 5px;
			text-overflow: ellipsis;
			word-wrap: break-word;
            :first-child{
                padding-left: 20px; 
            }
			:last-child {
				/* text-align: right; */
                padding-right: 20px;
			}
		}
	}
`;

export const Td = styled('td')<{ withAvatar?: boolean; webOnly?: boolean }>`
	display: ${(props) => (props.withAvatar ? 'flex' : '')};
	align-items: ${(props) => (props.withAvatar ? 'center' : '')};
	@media only screen and (max-width: 800px) {
		visibility: ${(props) => (props.webOnly ? 'hidden' : 'visible')};
		display: ${(props) => (props.webOnly ? 'none' : 'table-cell')};
	}
`;
export const Th = styled('th')<{ webOnly?: boolean }>`
	@media only screen and (max-width: 800px) {
		visibility: ${(props) => (props.webOnly ? 'hidden' : 'visible')};
		display: ${(props) => (props.webOnly ? 'none' : 'table-cell')};
	}
`;

export const PaginationStyles = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 1em 0;
	& > * {
		font-size: 0.8em;
		font-weight: 500;
		padding: 1em;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2em;
		height: 2em;
		margin: 0 0.5em;
	}
`;
export const PageButton = styled('button')<{ active?: boolean }>`
	background-color: ${({ active }) => (active ? '#F0F9FF' : 'transparent')};
	border-color: ${({ active }) => (active ? '#7DD3FC' : 'transparent')};
	border-radius: 0.3em;
	border-width: 1px;
`;

export const TableInfoRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em;
	color: rgba(23, 23, 23, 0.767);
`;
