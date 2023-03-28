import { Dispatch, FC, SetStateAction } from 'react';
import { Outlet } from 'react-router-dom';

import { MainWrapper } from '../';
import { Header } from '../../components';

interface LayoutProps {
	name: string | null;
	setToken: Dispatch<SetStateAction<string | null>>;
	setName: Dispatch<SetStateAction<string | null>>;
}

const Layout: FC<LayoutProps> = ({ name, setToken, setName }) => (
	<>
		<Header name={name} setName={setName} setToken={setToken} />
		<MainWrapper>
			<Outlet />
		</MainWrapper>
	</>
);

export default Layout;
