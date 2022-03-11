import { Row } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
	background-color: #4bde95;
	width: 325px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	@media only screen and (max-width: 960px) {
		width: 100vw;
		height: 240px;
	}
`;

export const Label = styled.span`
	width: 162px;
	font-size: 13px;
	font-weight: 400;
	text-align: left;
	color: #fff;
	margin-left: 10px;
	height: 16px;
	@media only screen and (max-width: 960px) {
		width: 80%;
		margin-left: auto;
	}
`;

export const NewCardLabel = styled.span`
	width: 202px;
	font-size: 20px;
	font-weight: 700;
	text-align: left;
	color: #fff;
	margin-left: 10px;
	line-height: 24px;
	height: 16px;
	@media only screen and (max-width: 960px) {
		width: 202px;
		line-height: 20px;
		font-size: 16px;
		height: 38px;
		margin-top: 5px;
	}
`;

export const StyledRow = styled(Row)`
	display: flex;
	cursor: pointer;
	width: 268px;
	height: 50px;
	margin-left: 10px;
	margin-top: 50px;
	@media only screen and (max-width: 960px) {
		margin-top: 18px;
		width: 100%;
	}
`;

export const NewCardRow = styled(Row)`
	display: flex;
	cursor: pointer;
	width: 268px;
	height: 50px;
	margin-left: 10px;
	margin-top: 51px;

	@media only screen and (max-width: 960px) {
		display: flex;
		flex-direction: row;
		position: absolute;
		top: 10px;
		left: 11.11%;
	}
`;
