import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FlexContainer, Input, Button, Label } from '../../common';

import { LOGIN_BUTTON_TEXT } from '../../constants';

import StyledLogin from './Login.styles';

const Login: FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate = useNavigate();

	const handleEmailChange: ChangeEventHandler<HTMLInputElement> = ({
		target,
	}) => setEmail(target.value);

	const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = ({
		target,
	}) => setPassword(target.value);

	const handleLoginFormSubmit: FormEventHandler<HTMLFormElement> = async (
		e
	) => {
		e.preventDefault();

		const userData = {
			password,
			email,
		};

		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		const { result, user } = data;

		if (response.status === 201) {
			localStorage.setItem(
				'coursesAppUser',
				JSON.stringify({ ...user, token: result })
			);
			navigate('/courses');
		} else {
			window.alert(result);
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
		>
			<h2>Login</h2>
			<FlexContainer column justify='center' align='center'>
				<Label labelText='Email'>
					<Input
						type='email'
						value={email}
						placeholder='Enter email'
						onChange={handleEmailChange}
					/>
				</Label>
				<Label labelText='Password'>
					<Input
						type='password'
						value={password}
						placeholder='Enter password'
						onChange={handlePasswordChange}
					/>
				</Label>
				<Button type='submit'>{LOGIN_BUTTON_TEXT}</Button>
			</FlexContainer>
			<p>
				If you have an account you can <Link to='/registration'>Register</Link>
			</p>
		</StyledLogin>
	);
};

export default Login;
