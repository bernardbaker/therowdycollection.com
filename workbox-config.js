module.exports = {
  globDirectory: "public/",
  globPatterns: ["**/*.{svg,png,jpg,webp,mp4,mp3}"],
  swDest: "public/sw.js",
  swSrc: "sw.js",
  maximumFileSizeToCacheInBytes: 52428800,
};
