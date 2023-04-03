import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { MainWrapper } from '../';
import { Header, Loading } from '../../components';
import { asyncSetCourses } from '../../store/courses/thunk';
import { asyncSetAuthors } from '../../store/authors/thunk';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

const Layout: FC = () => {
	const dispatch: ThunkDispatch<StoreState, void, Action> = useDispatch();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const token = localStorage.getItem('coursesAppUserToken');

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			await dispatch(asyncSetCourses());
			await dispatch(asyncSetAuthors());
			console.log('loading finished');
			setIsLoading(false);
		})();
	}, [dispatch, token]);
	return (
		<>
			<Header />
			<MainWrapper>{isLoading ? <Loading /> : <Outlet />}</MainWrapper>
		</>
	);
};

export default Layout;
