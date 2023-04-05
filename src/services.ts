import axios, { isAxiosError } from 'axios';

const baseUrl = 'http://localhost:4000';

type HTTPMethods = 'get' | 'post' | 'delete' | 'put';

type RequestParameters<TBody> = {
	endpoint: string;
	method: HTTPMethods;
	data?: TBody;
	config?: { headers: { Authorization: string } };
};

const apiService = async <TResponse, TBody>(
	requestParameters: RequestParameters<TBody>
): Promise<TResponse | undefined> => {
	const { endpoint, method, data, config } = requestParameters;

	let response;

	try {
		switch (method) {
			case 'post':
				response = await axios.post<TResponse>(
					`${baseUrl}/${endpoint}`,
					data,
					config
				);
				break;
			case 'put':
				response = await axios.put<TResponse>(
					`${baseUrl}/${endpoint}`,
					data,
					config
				);
				break;
			case 'get':
				response = await axios.get<TResponse>(`${baseUrl}/${endpoint}`, config);
				break;
			case 'delete':
				response = await axios.delete<TResponse>(
					`${baseUrl}/${endpoint}`,
					config
				);
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
			if (e instanceof Error) {
				errorMessage = e.message;
			} else {
				errorMessage = 'Unknown error occurred';
			}
		}
		alert(errorMessage);
	}
};

export const postLogin = async (
	data: UserLoginPostData
): Promise<LoginApiResponse | undefined> => {
	return await apiService<LoginApiResponse, UserLoginPostData>({
		endpoint: 'login',
		method: 'post',
		data,
	});
};

export const postRegister = async (
	data: UserRegisterData
): Promise<RegisterApiResponse | undefined> => {
	return await apiService<RegisterApiResponse, UserRegisterData>({
		endpoint: 'register',
		method: 'post',
		data,
	});
};

export const fetchAllCourses = async (): Promise<
	CoursesApiResponse | undefined
> => {
	return await apiService<CoursesApiResponse, any>({
		endpoint: 'courses/all',
		method: 'get',
	});
};

export const fetchAllAuthors = async (): Promise<
	AuthorsApiResponse | undefined
> => {
	return await apiService<AuthorsApiResponse, any>({
		endpoint: 'authors/all',
		method: 'get',
	});
};

export const fetchUserInfo = async (
	token: string
): Promise<UserApiResponse | undefined> => {
	return await apiService<UserApiResponse, any>({
		endpoint: 'users/me',
		method: 'get',
		config: { headers: { Authorization: token } },
	});
};

export const logoutUserOnServer = async (
	token: string
): Promise<LogoutApiResponse | undefined> => {
	return await apiService<LogoutApiResponse, any>({
		endpoint: 'logout',
		method: 'delete',
		config: { headers: { Authorization: token } },
	});
};

export const deleteCourseFromServer = async (
	id: string,
	token: string
): Promise<DeleteCourseApiResponse | undefined> => {
	return await apiService<DeleteCourseApiResponse, any>({
		endpoint: `courses/${id}`,
		method: 'delete',
		config: { headers: { Authorization: token } },
	});
};

export const addCourseOnServer = async (
	course: Course,
	token: string
): Promise<AddCourseApiResponse | undefined> => {
	return await apiService<AddCourseApiResponse, any>({
		endpoint: 'courses/add',
		method: 'post',
		data: course,
		config: { headers: { Authorization: token } },
	});
};

export const updateCourseOnServer = async (
	course: Course,
	token: string
): Promise<UpdateCourseApiResponse | undefined> => {
	return await apiService<UpdateCourseApiResponse, any>({
		endpoint: `courses/${course.id}`,
		method: 'put',
		data: course,
		config: { headers: { Authorization: token } },
	});
};

export const addAuthorOnServer = async (
	name: string,
	token: string
): Promise<AddAuthorApiResponse | undefined> => {
	return await apiService<AddAuthorApiResponse, any>({
		endpoint: 'authors/add',
		method: 'post',
		data: { name },
		config: { headers: { Authorization: token } },
	});
};
