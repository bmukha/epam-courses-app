import axios, { isAxiosError } from 'axios';

const baseUrl = 'http://localhost:4000';

type HTTPMethods = 'get' | 'post';

const apiService = async <TResponse, TBody>(
	endpoint: string,
	method: HTTPMethods,
	data?: TBody
): Promise<TResponse | undefined> => {
	let response;
	try {
		switch (method) {
			case 'post':
				response = await axios.post<TResponse>(`${baseUrl}/${endpoint}`, data);
				break;
			case 'get':
				response = await axios.get<TResponse>(`${baseUrl}/${endpoint}`);
				break;
			default:
				throw new Error('Unknown http method');
		}

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
	data: UserLoginPostData
): Promise<LoginApiResponse | undefined> => {
	return await apiService<LoginApiResponse, UserLoginPostData>(
		'login',
		'post',
		data
	);
};

export const postRegister = async (
	data: UserRegisterData
): Promise<RegisterApiResponse | undefined> => {
	return await apiService<RegisterApiResponse, UserRegisterData>(
		'register',
		'post',
		data
	);
};

export const fetchAllCourses = async (): Promise<
	CoursesApiResponse | undefined
> => {
	return await apiService<CoursesApiResponse, any>('courses/all', 'get');
};

export const fetchAllAuthors = async (): Promise<
	AuthorsApiResponse | undefined
> => {
	return await apiService<AuthorsApiResponse, any>('authors/all', 'get');
};
