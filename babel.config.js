const presets = [
    [
        '@babel/env',
        {
            targets: {
                edge: '15',
                firefox: '60',
                chrome: '67',
                safari: '11.1',
                android: '6',
                ios: '10',
            },
            useBuiltIns: 'usage',
        },
    ],
    "@babel/preset-react",
]

const plugins = [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-proposal-class-properties",
]

module.exports = { presets, plugins }