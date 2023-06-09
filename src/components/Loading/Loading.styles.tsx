import styled from 'styled-components';

const StyledLoading = styled.div`
	&,
	& * {
		box-sizing: border-box;
		--main-color: 45, 106, 79;
		--secondary-color: 173, 216, 230;
	}

	& {
		height: 200px;
		width: 200px;
		position: relative;
	}

	& .ring {
		border-radius: 50%;
		position: absolute;
		border: calc(200px * 0.05) solid transparent;
		border-top-color: rgb(var(--main-color));
		border-left-color: rgb(var(--secondary-color));
		animation: semipolar-spinner-animation 2s infinite;
	}

	& .ring:nth-child(1) {
		height: calc(200px - 200px * 0.2 * 0);
		width: calc(200px - 200px * 0.2 * 0);
		top: calc(200px * 0.1 * 0);
		left: calc(200px * 0.1 * 0);
		animation-delay: calc(2000ms * 0.1 * 4);
		z-index: 5;
	}

	& .ring:nth-child(2) {
		height: calc(200px - 200px * 0.2 * 1);
		width: calc(200px - 200px * 0.2 * 1);
		top: calc(200px * 0.1 * 1);
		left: calc(200px * 0.1 * 1);
		animation-delay: calc(2000ms * 0.1 * 3);
		z-index: 4;
	}

	& .ring:nth-child(3) {
		height: calc(200px - 200px * 0.2 * 2);
		width: calc(200px - 200px * 0.2 * 2);
		top: calc(200px * 0.1 * 2);
		left: calc(200px * 0.1 * 2);
		animation-delay: calc(2000ms * 0.1 * 2);
		z-index: 3;
	}

	& .ring:nth-child(4) {
		height: calc(200px - 200px * 0.2 * 3);
		width: calc(200px - 200px * 0.2 * 3);
		top: calc(200px * 0.1 * 3);
		left: calc(200px * 0.1 * 3);
		animation-delay: calc(2000ms * 0.1 * 1);
		z-index: 2;
	}

	& .ring:nth-child(5) {
		height: calc(200px - 200px * 0.2 * 4);
		width: calc(200px - 200px * 0.2 * 4);
		top: calc(200px * 0.1 * 4);
		left: calc(200px * 0.1 * 4);
		animation-delay: calc(2000ms * 0.1 * 0);
		z-index: 1;
	}

	@keyframes semipolar-spinner-animation {
		50% {
			transform: rotate(360deg) scale(0.7);
		}
	}
`;

export default StyledLoading;
