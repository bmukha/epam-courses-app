import {
	ChangeEventHandler,
	FC,
	FormEventHandler,
	MouseEventHandler,
	useState,
} from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { Input, Button, Label } from '../../common';

import { REGISTRATION_BUTTON_TEXT } from '../../constants';

import { postRegister } from '../../services';

import StyledRegistration from './Registration.styles';

const Registration: FC = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate: NavigateFunction = useNavigate();

	const handleNameChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}): void => setName(value);

	const handleEmailChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}): void => setEmail(value);

	const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}): void => setPassword(value);

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

		const response = await postRegister(newUser);

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
					onChange={handleNameChange}
				/>
			</Label>
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
