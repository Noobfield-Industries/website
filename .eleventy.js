module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: ".",         // your input folder
      includes: "_includes", // layout files go here
      output: "docs",     // this is key
    },
  };
};
