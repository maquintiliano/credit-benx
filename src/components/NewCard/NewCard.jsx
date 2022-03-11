import React from 'react';
import { Image } from 'antd';
import {
	Container,
	Label,
	NewCardLabel,
	NewCardRow,
	StyledRow,
} from './NewCard.style';
import cardIcon from '../../assets/cardIcon.svg';
import chevron from '../../assets/chevron.svg';
import { boldString } from '../../utils/boldString';

const NewCard = () => {
	let widthOutput = document.querySelector('#sideContainer');

	const resize = () => {
		widthOutput = window.innerWidth;
		changeLabel(widthOutput);
	};
	window.onresize = resize;

	const changeLabel = (width) => {
		document.getElementById('label').innerHTML = 'Alterar forma de pagamento';
		let step = boldString('Etapa 2 de 3', 'Etapa 2');
		width < 961
			? (document.getElementById('label').innerHTML = step)
			: (document.getElementById('label').innerHTML =
					'Alterar forma de pagamento');
	};

	return (
		<Container id='sideContainer'>
			<StyledRow>
				<Image src={chevron} preview={false} width='8px' height='13.67px' />
				<Label id='label'>{'Alterar forma de pagamento'}</Label>
			</StyledRow>
			<NewCardRow>
				<Image src={cardIcon} preview={false} />
				<NewCardLabel>Adicione um novo cartão de crédito</NewCardLabel>
			</NewCardRow>
		</Container>
	);
};

export default NewCard;
