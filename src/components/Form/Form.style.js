import styled from 'styled-components';
import { Button, DatePicker, Form, Input, Select, Steps } from 'antd';

export const StyledInput = styled(Input)`
	&& {
		background: none;
		padding: 0;
		margin: 30px 0 0 0;
		height: 50px;
		font-size: 16px;
		font-weight: 400;
		width: 100%;
		text-align: start;
		border-bottom: 1px solid #c6c6c6;
		border-top: 0;
		border-left: 0;
		border-right: 0;
	}
`;

export const StyledInputNumber = styled(Input)`
	&& {
		background: none;
		padding: 0;
		margin: 30px 0 0 0;
		height: 50px;
		font-size: 16px;
		font-weight: 400;
		width: 100%;
		text-align: start;
		border-bottom: 1px solid #c6c6c6;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		line-height: 3.5715;
	}
`;

export const StyledDatePicker = styled(DatePicker)`
	&& {
		background: none;
		padding: 0;
		margin: 30px 0 0 0;
		height: 50px;
		width: 100%;
		text-align: start;
		border-bottom: 1px solid #c6c6c6;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		.ant-picker-input > input {
			font-size: 16px;
			font-weight: 400;
		}
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-end;
	width: 100%;
	@media only screen and (max-width: 960px) {
		height: 65vh;
		align-items: center;
		justify-content: space-between;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 65vh;
	margin-right: 20px;
	@media only screen and (max-width: 960px) {
		align-items: center;
		flex-direction: column;
		width: 100%;
		margin-bottom: 60px;
	}
`;

export const StyledForm = styled(Form)`
	width: 64%;
	position: relative;
	left: 36%;
	@media only screen and (max-width: 960px) {
		margin-top: 80px;
		position: static;
		width: 70%;
	}
`;

export const StyledButton = styled(Button)`
	background-color: #308e5f;
	width: 120px;
	height: 40px;
	color: #fff;
	margin-right: 5px;
	border-radius: 5px;
	left: 40%;
	@media only screen and (max-width: 960px) {
		left: 0;
	}
`;

export const StyledSelect = styled(Select)`
	border-bottom: 1px solid #c6c6c6;
	margin-top: 30px;
	width: 100%;
	height: 50px;
	text-align: start;
	font-size: 16px;
	&& {
		.ant-select-arrow {
			color: #4bde95;
		}
		.ant-select-selector {
			padding: 0;
			height: inherit;
			border-top: 0;
			border-left: 0;
			border-right: 0;
		}
		.ant-select-selection-placeholder {
			line-height: 50px;
		}

		.ant-select-selection-item {
			line-height: 50px;
		}
	}
`;

export const StyledSteps = styled(Steps)`
	&& {
		.ant-steps-item-process {
			.ant-steps-item-icon {
				background: #fff;
				border-color: #4bde95;
				.ant-steps-icon {
					color: #4bde95;
				}
			}
			.ant-steps-item-container
				> .ant-steps-item-content
				> .ant-steps-item-title {
				color: #4bde95;
			}
		}

		.ant-steps-item-finish {
			.ant-steps-item-icon {
				background: #4bde95;
				border-color: #4bde95;
				.ant-steps-icon {
					color: #fff;
				}
			}

			.ant-steps-item-container
				> .ant-steps-item-content
				> .ant-steps-item-title {
				color: #4bde95;
			}
		}

		.ant-steps-item-active::before {
			display: none;
		}
		.ant-steps-item::after {
			border: 1px solid #4bde95;
			border-bottom: none;
			border-left: none;
			top: 20px;
		}
	}

	width: 455px;
	height: 20px;
	left: 602px;
	top: 48px;

	@media only screen and (max-width: 960px) {
		display: none;
	}
`;
