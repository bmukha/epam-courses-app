import { FC } from 'react';

import logo from '../../../../assets/logo.png';

import StyledLogo, { StyledLogoProps } from './Logo.styles';

interface LogoProps extends StyledLogoProps {}

const Logo: FC<LogoProps> = () => <StyledLogo src={logo} alt='epam logo' />;

export default Logo;
