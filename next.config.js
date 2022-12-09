/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,

  i18n: {
    locales: ["sv", "en"],
    defaultLocale: "sv",
  },

  async rewrites() {
    /**
     * This must return something for bug to appear, does not have to match the page that is affected
     */
    return [
      {
        source: "/foo",
        destination: `/bar`,
      },
    ]
  },
}
