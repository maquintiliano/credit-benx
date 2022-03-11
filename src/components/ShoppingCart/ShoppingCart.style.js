import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 960px) {
		height: 100vh;
		flex-direction: column;
		justify-content: flex-end;
	}
`;
