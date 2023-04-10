module.exports = {
	type: 'module',
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	resolver: 'jest-node-exports-resolver',
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
			diagnostics: true,
		},
	},
};
