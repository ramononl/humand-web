// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "humand",
  titleTemplate: `%s | humand`,
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {
          options: {
            whitelist: [
              "bg-green-100",
              "bg-green-200",
              "bg-green-300",
              "bg-green-400",
              "bg-green-500",
              "bg-green-600",
              "bg-green-700",
              "bg-green-800",
              "bg-green-900",
              "bg-orange-100",
              "bg-orange-200",
              "bg-orange-300",
              "bg-orange-400",
              "bg-orange-500",
              "bg-orange-600",
              "bg-orange-700",
              "bg-orange-800",
              "bg-orange-900",
              "bg-gray-100",
              "bg-gray-200",
              "bg-gray-300",
              "bg-gray-400",
              "bg-gray-500",
              "bg-gray-600",
              "bg-gray-700",
              "bg-gray-800",
              "bg-gray-900",
              "text-green-100",
              "text-green-200",
              "text-green-300",
              "text-green-400",
              "text-green-500",
              "text-green-600",
              "text-green-700",
              "text-green-800",
              "text-green-900",
              "text-orange-100",
              "text-orange-200",
              "text-orange-300",
              "text-orange-400",
              "text-orange-500",
              "text-orange-600",
              "text-orange-700",
              "text-orange-800",
              "text-orange-900",
              "text-gray-100",
              "text-gray-200",
              "text-gray-300",
              "text-gray-400",
              "text-gray-500",
              "text-gray-600",
              "text-gray-700",
              "text-gray-800",
              "text-gray-900"
            ]
          }
        },
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/projects/**/*.md",
        typeName: "ProjectPage"
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"]
    }
  },
  templates: {
    ProjectPage: "/projects/:title"
  }
};
