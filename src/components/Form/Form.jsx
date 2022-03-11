import React, { useEffect, useState } from 'react';
import { Col, Row, Form } from 'antd';
import {
	Container,
	StyledInput,
	FormContainer,
	StyledButton,
	StyledSelect,
	StyledSteps,
	StyledDatePicker,
	StyledInputNumber,
	StyledForm,
} from './Form.style';
import Card from '../Card/Card';
import hub from '../../config/hub';

const { Option } = StyledSelect;
const { Step } = StyledSteps;

const FormComponent = (props) => {
	const promise = Promise;
	const [name, setName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [validate, setValidate] = useState('');
	const [cardFlag, setCardFlag] = useState('default');

	const acceptedCreditCards = {
		visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
		mastercard:
			/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
		amex: /^3[47][0-9]{13}$/,
		discover:
			/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
		diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
	};

	const validateCard = (obj, value) => {
		if (value === '') {
			setCardFlag();
		} else if (value.split('').length > 16) {
			return promise.reject('Número de cartão inválido');
		} else {
			// remove all non digit characters
			// var value = card.replace(/\D/g, '');
			var sum = 0;
			var shouldDouble = false;
			// loop through values starting at the rightmost side
			for (var i = value.length - 1; i >= 0; i--) {
				var digit = parseInt(value.charAt(i));

				if (shouldDouble) {
					if ((digit *= 2) > 9) digit -= 9;
				}

				sum += digit;
				shouldDouble = !shouldDouble;
			}

			var valid = sum % 10 === 0;
			var accepted = false;

			// loop through the keys (visa, mastercard, amex, etc.)
			Object.keys(acceptedCreditCards).forEach(function (key) {
				var regex = acceptedCreditCards[key];
				if (regex.test(value)) {
					setCardFlag(key);
					accepted = true;
				}
			});

			if (valid === false && accepted === false) {
				return promise.reject('Número de cartão inválido');
			}
		}
		return promise.resolve();
	};

	const validateCvv = (obj, value) => {
		const valueArray = value.split('');
		let erro = 0;
		valueArray.forEach((value) => {
			if (isNaN(parseInt(value))) {
				return erro++;
			}
		});
		if (erro > 0) return promise.reject('CVV inválido');
		return promise.resolve();
	};

	const validateDate = (object, value) => {
		const today = new Date();
		if (value < today) {
			return promise.reject('Data inválida');
		}
		return promise.resolve();
	};

	const installments = [
		'1x',
		'2x',
		'3x',
		'4x',
		'5x',
		'6x',
		'7x',
		'8x',
		'9x',
		'10x',
		'11x',
		'12x',
	];

	useEffect(() => {
		hub.emit('addName', name);
		hub.emit('addCardNumber', cardNumber);
		hub.emit('addValidate', validate);
		hub.emit('addCardFlag', cardFlag);
	}, [name, cardNumber, validate, cardFlag]);

	return (
		<Container>
			<StyledSteps type='navigation' size='small' current={0}>
				<Step status='finish' title='Carrinho' />
				<Step status='process' title='Pagamento' />
				<Step status='process' title='Confirmação' />
			</StyledSteps>
			<FormContainer>
				<Card />
				<StyledForm name='nest-messages' onFinish={() => console.log('foi')}>
					<Form.Item name='numberCard' rules={[{ validator: validateCard }]}>
						<StyledInput
							name='numberCard'
							placeholder='Número do cartão'
							value={cardNumber}
							maxLength={16}
							type='tel'
							onChange={(ev) => {
								var value = ev.target.value;
								var valueReplace = value.replace(/\D/g, '');
								if (valueReplace !== null && valueReplace !== '') {
									setCardNumber(valueReplace.match(/\d{1,4}/g).join(' '));
								} else if (value === '') {
									setCardNumber(ev.target.value);
								}
							}}
						/>
					</Form.Item>
					<Form.Item
						name='name'
						rules={[{ required: true, message: 'Insira seu nome completo' }]}>
						<StyledInput
							placeholder='Nome (igual ao cartão)'
							name='name'
							required={true}
							onChange={(ev) => setName(ev.target.value.toUpperCase())}
						/>
					</Form.Item>

					<Row stype='flex' justify='space-between'>
						<Col xs={11} sm={11} md={11} lg={11}>
							<Form.Item name='validate' rules={[{ validator: validateDate }]}>
								<StyledDatePicker
									name='validate'
									placeholder='Validade'
									format='MM/YY'
									suffixIcon={false}
									onChange={(ev) => setValidate(ev.format('MM/YY'))}
								/>
							</Form.Item>
						</Col>
						<Col xs={11} sm={11} md={11} lg={11}>
							<Form.Item name='cvv' rules={[{ validator: validateCvv }]}>
								<StyledInputNumber
									name='cvv'
									placeholder='CVV'
									maxLength={4}
									min={0}
									controls={false}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Form.Item
						name='installments'
						required={true}
						rules={[
							{ required: true, message: 'Insira o número de parcelas' },
						]}>
						<StyledSelect
							name='installments'
							placeholder='Número de parcelas'
							bordered={false}
							allowClear>
							{installments.map((installment, index) => (
								<Option key={index} label={installment}>
									{installment}
								</Option>
							))}
						</StyledSelect>
					</Form.Item>
					<StyledButton>CONTINUAR</StyledButton>
				</StyledForm>
			</FormContainer>
		</Container>
	);
};

export default FormComponent;
