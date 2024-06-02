module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("README.md");
    return {
        dir: {
            input: ".",
            output: "_site"
        }
    };
};

