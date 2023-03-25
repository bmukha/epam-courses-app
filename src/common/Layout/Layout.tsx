import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import { MainWrapper } from '../';
import { Header } from '../../components';

const Layout: FC = () => (
	<>
		<Header />
		<MainWrapper>
			<Outlet />
		</MainWrapper>
	</>
);

export default Layout;
