module.exports = {
    'env': {
        'node': true,
        'commonjs': true,
        'es6': true,
        'jest': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'warn',
            2
        ],
        'linebreak-style': [
            'warn',
            'windows'
        ],
        'quotes': [
            'warn',
            'double'
        ],
        'semi': [
            'warn',
            'always'
        ],
        'eqeqeq': 'warn',
        'no-trailing-spaces': 'warn',        
        'no-undef': 'warn',        
        'no-unused-vars': 'warn',            
        'object-curly-spacing': [
            'warn', 'always'
        ],
        'arrow-spacing': [
            'warn', { 'before': true, 'after': true }
        ],
        'no-console': 0
    },
}