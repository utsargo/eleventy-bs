
const eleventyParcelPlugin = require("@kitschpatrol/eleventy-plugin-parcel");

// const Card = require('./src/_includes/components/Card');
// const Menu = require('./src/_includes/components/Menu');
// const sass = require('sass');
module.exports = function(eleventyConfig) {
    //add sass
    // eleventyConfig.addTemplateFormats("scss");
    // eleventyConfig.addExtension("scss", {
    //     outputFileExtension: "css",
    //     compile: async function(inputContent) {
    //         let result = sass.compileString(inputContent);
    //         return async (data) => {
    //             return result.css;
    //         };
    //     }
    // });
    eleventyConfig.addPlugin(eleventyParcelPlugin);
    eleventyConfig.addPassthroughCopy("src/assets/");
    // eleventyConfig.addPassthroughCopy("src/css/");
    // eleventyConfig.addPassthroughCopy("src/js/");
    // eleventyConfig.addWatchTarget("src/css/");
    // eleventyConfig.addWatchTarget("src/js/");
    // eleventyConfig.addShortcode("Card", Card);
    // eleventyConfig.addShortcode("Menu", Menu);
    // eleventyConfig.addCollection("posts", function(collectionApi) {
    //     return collectionApi.getFilteredByGlob("src/blog/posts/**/*.md");
    // });
    // eleventyConfig.addCollection('posts', function(collectionApi) {
    //     return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md');
    //   })
    // eleventyConfig.addCollection('menuItems', function(collection) {
    //     return collection.getAll()
    //       .filter(item => item.data.menuitem === true)
    //       .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
    //   });
    // eleventyConfig.addPassthroughCopy("src/menu.json"); // Ensure menu.json gets copied to output directory

    // eleventyConfig.addDataExtension("json", contents => {
    //     return JSON.parse(contents);
    // });
    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site",
        },
        templateFormats: ["njk", "md", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
}