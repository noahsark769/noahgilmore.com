const path = require('path');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postsTemplate = path.resolve(`src/templates/MDXBlogPostsTemplate.jsx`)

    resolve(
      graphql(
        `
            query MDXQuery {
              allMdx(sort: { order: DESC, fields: [frontmatter___date]}) {
                edges {
                  node {
                    parent {
                      ... on File {
                        name
                        relativePath
                      }
                    }
                    id
                    frontmatter {
                      title
                      date
                      mdxPreview
                      tags
                    }
                  }
                }
              }
            }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        let pagesByTag = new Map();
        result.data.allMdx.edges.forEach((edge) => {
            const tagsString = edge.node.frontmatter.tags;
            if (!tagsString) { return }

            const tags = tagsString.split(",");
            tags.map((tag) => tag.trim()).forEach((tag) => {
                if (!pagesByTag.has(tag)) {
                    pagesByTag.set(tag, []);
                }
                let currentPages = pagesByTag.get(tag);
                currentPages.push(edge)
                pagesByTag.set(tag, currentPages);
            });
        });

        for (let entry of pagesByTag.entries()) {
            let [tag, edges] = entry;
            const pagePath = path.join('/blog', 'tags', tag, '/');
            createPage({
                path: pagePath,
                component: postsTemplate,
                // In your blog post template's graphql query, you can use path
                // as a GraphQL variable to query for data from the markdown file.
                context: {
                    edges: edges,
                    tag: tag
                },
            })
        }
      })
    )
  })
}