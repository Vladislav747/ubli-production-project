export function buildBabelLoader() {
    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                    /**
                     * брал is Dev из Options -
                     * { isDev }: BuildOption
                     * @TODO потом разобраться в чем проблема
                     */
                    // isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean)
            }
        }
    };
}
