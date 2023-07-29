module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        '/node_modules/(?!axios).+\\.js$'
    ],
};
