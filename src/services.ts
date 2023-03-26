import axios, { isAxiosError } from 'axios';

const baseUrl = 'http://localhost:4000';

export interface UserLoginData {
	email: string;
	password: string;
}

export interface LoginApiSuccess {
	successful: true;
	result: string;
	user: UserLoginData;
}

export interface ApiError {
	successful: false;
	result: string;
	error?: string;
	errors?: string[];
}

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
): Promise<LoginApiSuccess | undefined> => {
	return await postData<UserLoginData, LoginApiSuccess>('login', data);
};
