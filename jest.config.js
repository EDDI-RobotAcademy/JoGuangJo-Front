module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // for avoid axios SyntaxError:
  // Cannot use import statement outside a module
  transformIgnorePatterns: ["node_modules/(?!axios)"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
