module.exports = {
    purge: [
        './public/**/*.html',
        './src/**/*.vue',
    ],

    darkMode: false, 

    theme: {

        // Breakpoints
        screens: {
            'sm': {'max': '639px'},
        },

        // Fonts
        extend: {
            fontFamily: {
                body: ['Inter']
            },
        },

        // Colors
        colors: {
            'white': '#fff',

            blue: {
                default: '#3B82F6',
                dark: '#2563eb',
            },

            teal: {
                default: '#0d9488',
                dark: '#0f766e',
            },

            green: {
                default: '#16A34A',
                dark: '#15803d',
            },

            'gray-opacity': '#6b7280bf',
        },
    },

    variants: {
        extend: {},
    },

    content: [],

    plugins: []
}