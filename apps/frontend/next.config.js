/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  // Add internal pacakges here
  'ui',
]);

module.exports = withTM({
  reactStrictMode: true,
});
