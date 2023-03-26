import axios, { isAxiosError } from 'axios';

const baseUrl = 'http://localhost:4000';

const postData = async <TBody, TResponse>(endpoint: string, data: TBody) => {
	try {
		const response = await axios.post<TResponse>(
			`${baseUrl}/${endpoint}`,
			data
		);
		return response.data;
	} catch (e) {
		let errorMessage: string | undefined;
		if (isAxiosError<ApiError>(e) && e.response) {
			const { errors, error, result } = e.response.data;
			if (errors) {
				errorMessage = errors.join('\n');
			} else if (error) {
				errorMessage = error;
			} else {
				errorMessage = result;
			}
		} else {
			errorMessage = 'Unknown error occured';
		}
		alert(errorMessage);
	}
};

export const postLogin = async (
	data: UserLoginData
): Promise<LoginApiResponse | undefined> => {
	return await postData<UserLoginData, LoginApiResponse>('login', data);
};

export const postRegister = async (
	data: UserRegisterData
): Promise<RegisterApiResponse | undefined> => {
	return await postData<UserRegisterData, RegisterApiResponse>(
		'register',
		data
	);
};
