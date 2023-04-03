import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { userRoleSelector } from '../../selectors';

const PrivateRouter: FC = () => {
	const navigate = useNavigate();
	const isUserAnAdmin = useSelector(userRoleSelector) === 'admin';

	useEffect(() => {
		!isUserAnAdmin && navigate('/courses');
	}, [isUserAnAdmin, navigate]);

	return <Outlet />;
};

export default PrivateRouter;
