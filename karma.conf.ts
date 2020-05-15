module.exports = (config: any) => {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "karma-typescript"],

    files: [
      { pattern: "src/components/**/*.spec.ts" },
      { pattern: "src/components/**/*.ts" },
      { pattern: "src/services/**/*.ts" },
    ],
    exclude: [],
    preprocessors: {
      "**/*.ts": ["karma-typescript"],
    },

    reporters: ["progress"],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    concurrency: Infinity,
  });
};
