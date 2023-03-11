import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
	min-width: 150px;
	height: 35px;
	padding: 0.5rem;
	display: inline-block;
	background-color: #4caf50;
	color: white;
	text-align: center;
	text-decoration: none;
	border: none;
	border-radius: 1rem;
	cursor: pointer;
	transition-duration: 0.4s;
`;

const Button = ({ text, onClick, dataKey }) => (
	<StyledButton onClick={onClick} data-key={dataKey}>
		{text}
	</StyledButton>
);

export default Button;
