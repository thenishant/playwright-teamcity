module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    testTimeout: 450000,
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testPathIgnorePatterns: [".d.ts", ".js"],
    reporters: [
        "default",
    ],
    testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
}
