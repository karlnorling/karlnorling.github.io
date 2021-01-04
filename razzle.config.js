module.exports = {
  plugins: [
    {
      name: 'typescript',
      options: {
        useBabel: true,
        tsLoader: {
          transpileOnly: true,
          experimentalWatchApi: false,
        },
        forkTsChecker: {
          transpileOnly: true,
          tslint: false,
          eslint: {
            files: './src/**/*.{ts,tsx,js,jsx}'
          }
        },
      },
    },
  ],
};
