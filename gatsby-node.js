const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/pages/Post.js");
    resolve(
      graphql(
        `
          {
            allPrismicBubble {
              edges {
                node {
                  id
                  slugs
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allPrismicBubble.edges;
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slugs[0]}/`,
            component: blogPost,
            context: {
              slug: post.node.id,
            },
          });
        });
      })
    );
  });
};
