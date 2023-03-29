import {
	FC,
	FormEventHandler,
	MouseEventHandler,
	useEffect,
	useState,
} from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { Input, Button, Label } from '../../common';

import { REGISTRATION_BUTTON_TEXT } from '../../constants';

import { postRegister } from '../../services';

import StyledRegistration from './Registration.styles';

interface RegistrationProps {
	token: string | null;
}

const Registration: FC<RegistrationProps> = ({ token }) => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate: NavigateFunction = useNavigate();

	useEffect(() => {
		token && navigate('/courses');
	}, [token, navigate]);

	const handleLoginLinkClick: MouseEventHandler<HTMLAnchorElement> = (
		e
	): void => {
		e.preventDefault();
		navigate('/login');
	};

	const handleRegistrationFormSubmit: FormEventHandler<
		HTMLFormElement
	> = async (e): Promise<void> => {
		e.preventDefault();

		const newUser: UserRegisterData = {
			name: name.trim(),
			password: password.trim(),
			email: email.trim(),
		};

		const response: RegisterApiResponse | undefined = await postRegister(
			newUser
		);

		if (response) {
			navigate('/login');
		} else {
			setName(name.trim());
			setPassword(password.trim());
			setEmail(email.trim());
		}
	};

	return (
		<StyledRegistration
			forwardedAs='form'
			column
			justify='center'
			align='center'
			gap='1rem'
			addBorder
			onSubmit={handleRegistrationFormSubmit}
		>
			<h2>Registration</h2>

			<Label labelText='Name' column gap='0.5rem'>
				<Input
					value={name}
					placeholder='Enter name'
					onChange={({ target: { value } }) => setName(value)}
				/>
			</Label>
			<Label labelText='Email' column gap='0.5rem'>
				<Input
					type='email'
					value={email}
					placeholder='Enter email'
					onChange={({ target: { value } }) => setEmail(value)}
				/>
			</Label>
			<Label labelText='Password' column gap='0.5rem'>
				<Input
					type='password'
					value={password}
					placeholder='Enter password'
					onChange={({ target: { value } }) => setPassword(value)}
				/>
			</Label>
			<Button type='submit'>{REGISTRATION_BUTTON_TEXT}</Button>
			<p>
				If you have an account you can&nbsp;
				<a href='/login' onClick={handleLoginLinkClick}>
					Login
				</a>
			</p>
		</StyledRegistration>
	);
};

export default Registration;
