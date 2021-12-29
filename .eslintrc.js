module.exports = {
  env: {browser: true, es6: true, node: true},
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
    // 'react/jsx-uses-react': 'error',
    // 'react/jsx-uses-vars': 'error',
    'react/function-component-definition': [
      'off',
      {
        namedComponents: 'function-expression',
        unnamedComponents: 'function-expression',
      },
    ],
    // 자식컴포넌트에 변수에 안넣고 넘길때 {}쓰면 에러
    'react/jsx-curly-brace-presence': [
      'error',
      {props: 'ignore', children: 'ignore'},
    ],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'ignore',
        explicitSpread: 'enforce',
      },
    ],
    'no-use-before-define': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
