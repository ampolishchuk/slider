module.exports = (config: any) => {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "karma-typescript"],
    plugins: [
      "karma-jasmine",
      "karma-typescript",
      "karma-chrome-launcher",
      "karma-jasmine-html-reporter",
      "karma-coverage",
    ],

    files: [
      { pattern: "src/components/**/*.spec.ts" },
      { pattern: "src/components/**/*.ts" },
      { pattern: "src/services/**/*.ts" },
    ],
    exclude: [],
    preprocessors: {
      "src/components/**/*.ts": ["karma-typescript", "coverage"],
      "src/services/**/*.ts": ["karma-typescript"],
    },

    reporters: ["kjhtml", "coverage"],

    coverageReporter: {
      type: "html",
      dir: "coverage/",
    },

    client: {
      clearContext: false,
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    concurrency: Infinity,
  });
};
