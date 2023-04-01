import {
	ChangeEventHandler,
	FC,
	FormEventHandler,
	useEffect,
	useState,
} from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { Action } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { Input, Button, Label } from '../../common';

import { LOGIN_BUTTON_TEXT } from '../../constants';

import { userAuthStatusSelector } from '../../selectors';

import { asyncLoginUser } from '../../store/user/thunk';

import StyledLogin from './Login.styles';

const Login: FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate: NavigateFunction = useNavigate();
	const dispatch: ThunkDispatch<StoreState, void, Action> = useDispatch();
	const isUserLoggedIn = useSelector(userAuthStatusSelector);

	const handleEmailChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}): void => setEmail(value);

	const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}): void => setPassword(value);

	const handleLoginFormSubmit: FormEventHandler<HTMLFormElement> = async (
		e
	): Promise<void> => {
		e.preventDefault();

		const userData: UserLoginPostData = {
			password: password.trim(),
			email: email.trim(),
		};

		dispatch(asyncLoginUser(userData));

		navigate('/courses');
	};

	useEffect(() => {
		isUserLoggedIn && navigate('/courses');
	}, [isUserLoggedIn, navigate]);

	return (
		<StyledLogin
			forwardedAs='form'
			column
			justify='center'
			align='center'
			gap='1rem'
			addBorder
			onSubmit={handleLoginFormSubmit}
		>
			<h2>Login</h2>

			<Label labelText='Email' column gap='0.5rem'>
				<Input
					type='email'
					value={email}
					placeholder='Enter email'
					onChange={handleEmailChange}
				/>
			</Label>
			<Label labelText='Password' column gap='0.5rem'>
				<Input
					type='password'
					value={password}
					placeholder='Enter password'
					onChange={handlePasswordChange}
				/>
			</Label>
			<Button type='submit'>{LOGIN_BUTTON_TEXT}</Button>

			<p>
				If you have an account you can <Link to='/registration'>Register</Link>
			</p>
		</StyledLogin>
	);
};

export default Login;
