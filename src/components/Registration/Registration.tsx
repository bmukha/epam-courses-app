import {
	ChangeEventHandler,
	FC,
	FormEventHandler,
	MouseEventHandler,
	useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { Input, Button, FlexContainer, Label } from '../../common';

import { REGISTRATION_BUTTON_TEXT } from '../../constants';
import StyledRegistration from './Registration.styles';

const Registration: FC = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate = useNavigate();

	const handleNameChange: ChangeEventHandler<HTMLInputElement> = ({
		target,
	}): void => setName(target.value);

	const handleEmailChange: ChangeEventHandler<HTMLInputElement> = ({
		target,
	}): void => setEmail(target.value);

	const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = ({
		target,
	}): void => setPassword(target.value);

	const handleLoginLinkClick: MouseEventHandler<HTMLAnchorElement> = (
		e
	): void => {
		e.preventDefault();
		navigate('/login');
	};

	const handleRegistrationFormSubmit: FormEventHandler<
		HTMLFormElement
	> = async (e): Promise<any> => {
		e.preventDefault();

		const newUser = {
			name,
			password,
			email,
		};

		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.status === 201) {
			navigate('/login');
		} else {
			const data = await response.json();
			window.alert(data.errors.join('\n'));
		}
	};
	return (
		<StyledRegistration
			forwardedAs='form'
			column
			justify='center'
			align='center'
			gap='1rem'
			onSubmit={handleRegistrationFormSubmit}
		>
			<h2>Registration</h2>
			<FlexContainer column justify='center' align='center'>
				<Label labelText='Name'>
					<Input
						value={name}
						placeholder='Enter name'
						onChange={handleNameChange}
					/>
				</Label>
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

				<Button type='submit'>{REGISTRATION_BUTTON_TEXT}</Button>
			</FlexContainer>
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
