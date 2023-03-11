import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import styled from 'styled-components';

const StyledHeader = styled.header`
	padding: 1rem 0;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 1rem;
`;

const Header = () => {
	const handleClick = () => console.log('Button clicked');
	return (
		<StyledHeader>
			<Logo />
			<p>Bohdan</p>
			<Button text='Logout' onClick={handleClick} />
		</StyledHeader>
	);
};
export default Header;
