import React, { useEffect, useState } from 'react';
import { Col, Image } from 'antd';
import { Label, StyledCard, StyledRow } from './Card.style';
import hub from '../../config/hub';
import amex from '../../assets/flags/amex.svg';
import visa from '../../assets/flags/visa.svg';
import mastercard from '../../assets/flags/mastercard.svg';
import diners_club from '../../assets/flags/diners.svg';
import discover from '../../assets/flags/discover.svg';

const Card = () => {
	const [name, setName] = useState('NOME DO TITULAR');
	const [cardNumber, setCardNumber] = useState('**** **** **** ****');
	const [validate, setValidate] = useState('00/00');
	const [cardFlag, setCardFlag] = useState('');

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const background = {
		default:
			'radial-gradient(73.06% 104.31% at 14.59% 58.06%,#bfbfbf 0%,#a8a8a8 33.7%,#727272 100%)',
		visa: 'linear-gradient(25deg, #0f509e, #1399cd)',
		mastercard: 'linear-gradient(25deg, #ffa600, #fbfbfb)',
		amex: 'linear-gradient(25deg, #308c67, #a3f2cf)',
		discover: 'linear-gradient(25deg, #a78500, #eee)',
		diners_club: 'linear-gradient(25deg, #000000, #eee)',
	};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const flags = {
		default: '',
		visa: visa,
		mastercard: mastercard,
		amex: amex,
		discover: discover,
		diners_club: diners_club,
	};

	useEffect(() => {
		const addName = (nameEl) => setName(nameEl ? nameEl : 'NOME DO TITULAR');
		hub.on('addName', addName);
		const addCardNumber = (cardNumberEl) =>
			setCardNumber(cardNumberEl ? cardNumberEl : '**** **** **** ****');

		hub.on('addCardNumber', addCardNumber);
		const addValidate = (validateEl) =>
			setValidate(validateEl ? validateEl : '00/00');
		hub.on('addValidate', addValidate);
		const addCardFlag = (cardFlagEl) => {
			document.getElementById('card').style.backgroundImage =
				background[cardFlagEl];
			setCardFlag(flags[cardFlagEl]);
		};
		hub.on('addCardFlag', addCardFlag);
		return () => {
			hub.off('addName', addName);
			hub.off('addCardNumber', addCardNumber);
			hub.off('addValidate', addValidate);
			hub.off('addCardFlag', addCardFlag);
		};
	}, [name, cardNumber, validate, cardFlag, flags, background]);
	return (
		<StyledCard id='card'>
			<Image src={cardFlag} />
			<Label>{cardNumber}</Label>
			<StyledRow>
				<Col xs={16} sm={16} md={16} lg={16}>
					<Label>{name}</Label>
				</Col>
				<Col xs={8} sm={8} md={8} lg={8}>
					<Label>{validate}</Label>
				</Col>
			</StyledRow>
		</StyledCard>
	);
};

export default Card;
