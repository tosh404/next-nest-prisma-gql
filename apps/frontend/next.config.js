/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  // Add internal pacakges here
  'ui',
  'eslint-config-custom',
]);

module.exports = withTM({
  reactStrictMode: true,
});
