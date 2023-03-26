import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Input, Button, Label } from '../../common';

import { LOGIN_BUTTON_TEXT } from '../../constants';

import StyledLogin from './Login.styles';

import { UserLoginData, postLogin } from '../../services';

const Login: FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate = useNavigate();

	const handleEmailChange: ChangeEventHandler<HTMLInputElement> = ({
		target,
	}): void => setEmail(target.value);

	const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = ({
		target,
	}): void => setPassword(target.value);

	const handleLoginFormSubmit: FormEventHandler<HTMLFormElement> = async (
		e
	): Promise<void> => {
		e.preventDefault();

		const userData: UserLoginData = {
			password,
			email,
		};

		const response = await postLogin(userData);

		if (response) {
			const { user, result } = response;

			const userCredentials = {
				...user,
				token: result,
			};

			localStorage.setItem('coursesAppUser', JSON.stringify(userCredentials));
			navigate('/courses');
		}
	};

	return (
		<StyledLogin
			forwardedAs='form'
			column
			justify='center'
			align='center'
			gap='1rem'
			onSubmit={handleLoginFormSubmit}
			addBorder
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
