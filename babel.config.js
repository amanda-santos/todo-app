module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@contexts": "./src/contexts",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@theme": "./src/theme",
            "@types": "./src/types",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
