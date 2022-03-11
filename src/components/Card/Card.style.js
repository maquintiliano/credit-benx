import { Row } from 'antd';
import styled from 'styled-components';

export const StyledCard = styled.div`
	background-image: radial-gradient(
		73.06% 104.31% at 14.59% 58.06%,
		#bfbfbf 0%,
		#a8a8a8 33.7%,
		#727272 100%
	);
	border-radius: 8px;
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	width: 492px;
	height: 317px;
	margin-top: 0px;
	margin-left: 10px;
	position: absolute;
	right: 61%;
	top: 290px;
	@media only screen and (max-width: 960px) {
		position: absolute;
		right: 12.12%;
		left: 12.12%;
		top: 123px;
		width: 280px;
		height: 171.98px;
	}
	@media only screen and (min-width: 961px) and (max-width: 1290px) {
		right: 12.12%;
		left: 1%;
		top: 290px;
	}
`;

export const StyledRow = styled(Row)`
	width: 100%;
	display: flex;
	justify-content: space-between;
	text-align: start;
`;

export const Label = styled.span`
	width: 100%;
	font-size: 22px;
	font-weight: 400;
	text-align: start;
	color: #fff;
	@media only screen and (max-width: 960px) {
		width: 134px;
		font-size: 12px;
	}
`;
