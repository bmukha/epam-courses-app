import { TextareaHTMLAttributes } from 'react';

import styled from 'styled-components';

export interface StyledTextAreaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const StyledTextArea = styled.textarea<StyledTextAreaProps>`
	/* height: 35px; */
	padding: 0.5rem;
	border: 3px solid lightgray;
	border-radius: 10px;
	width: 100%;
	flex-grow: 1;
`;

export default StyledTextArea;
