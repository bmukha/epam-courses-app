import {
	ChangeEventHandler,
	FC,
	FormEventHandler,
	useEffect,
	useState,
} from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

import { Input, Button, Label } from '../../common';

import { LOGIN_BUTTON_TEXT } from '../../constants';

import { postLogin } from '../../services';

import StyledLogin from './Login.styles';

const Login: FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate: NavigateFunction = useNavigate();
	const token: string | null = localStorage.getItem('coursesAppUser');

	useEffect(() => {
		if (token) {
			navigate('/courses');
		}
	}, [navigate, token]);

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

		const userData: UserLoginData = {
			password: password.trim(),
			email: email.trim(),
		};

		const response: LoginApiResponse | undefined = await postLogin(userData);

		if (response) {
			const { user, result } = response;

			const userCredentials = {
				...user,
				token: result,
			};

			localStorage.setItem('coursesAppUser', JSON.stringify(userCredentials));
			navigate('/courses');
		} else {
			setPassword(password.trim());
			setEmail(email.trim());
		}
	};

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
