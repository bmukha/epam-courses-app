import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { MainWrapper } from '../';
import { Header, Loading } from '../../components';

interface LayoutProps {
	isLoading: boolean;
}

const Layout: FC<LayoutProps> = ({ isLoading }) => (
	<>
		<Header />
		<MainWrapper>{isLoading ? <Loading /> : <Outlet />}</MainWrapper>
	</>
);

export default Layout;
