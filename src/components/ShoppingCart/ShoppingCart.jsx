import React from 'react';
import Form from '../Form/Form';
import NewCard from '../NewCard/NewCard';
import { Container } from './ShoppingCart.style';

const ShoppingCart = () => {
	return (
		<Container>
			<NewCard />
			<Form />
		</Container>
	);
};

export default ShoppingCart;
