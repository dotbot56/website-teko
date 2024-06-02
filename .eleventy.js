module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("READNE.md");
    return {
        dir: {
            input: ".",
            output: "_site"
        }
    };
};

