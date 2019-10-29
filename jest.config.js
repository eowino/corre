module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        // eslint-disable-next-line prettier/prettier
        '__TEST__': true,
        'ts-jest': {
            diagnostics: {
                pathRegex: /\.(spec|test)\.ts$/
            }
        }
    }
};
