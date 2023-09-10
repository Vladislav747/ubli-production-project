import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(_, __) {
            // implement node event listeners here
        },
        baseUrl: 'http://localhost:5173/'
    },

    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack'
        }
    }
});
