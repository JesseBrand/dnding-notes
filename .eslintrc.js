module.exports = {
  settings: {
    react: {
      version: 'detect' // React version. "detect" automatically picks the version you have installed.
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@next/next/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  ignorePatterns: ['./node_modules/**', 'posts/**', 'styles/**', 'public/**', '.next/**'],
  rules: {
  }
}
