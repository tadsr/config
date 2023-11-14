module.exports = {
  extends: ['./base'],
  rules: {
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
  },
};
