import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRouter: FC = () => {
	const navigate = useNavigate();
	const savedUser: string | null = localStorage.getItem('coursesAppUser');

	useEffect(() => {
		if (savedUser) {
			const user: User = JSON.parse(savedUser);
			if (user.role !== 'admin') {
				navigate('/courses');
			}
		}
	}, [navigate, savedUser]);

	return <Outlet />;
};

export default PrivateRouter;
