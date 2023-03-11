import logo from '../../../../assets/logo.png';
import styled from 'styled-components';

const StyledLogo = styled.img`
	width: 100px;
	margin-right: auto;
`;

const Logo = () => <StyledLogo src={logo} alt='logo' />;

export default Logo;
