import styled from 'styled-components';

const StyledButton = styled.button`
	width: 150px;
	height: 35px;
	padding: 0.5rem;
	border: none;
	border-radius: 1rem;
	display: inline-block;
	background-color: #4caf50;
	color: white;
	text-align: center;
	font-weight: 700;
	font-size: 1.1rem;
	text-decoration: none;
	cursor: pointer;
`;

const Button = ({ text, onClick, dataKey }) => (
	<StyledButton onClick={onClick} data-key={dataKey}>
		{text}
	</StyledButton>
);

export default Button;
