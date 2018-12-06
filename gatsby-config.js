function rssFeedPlugin(glob, feedName, title) {
  return {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) => {
            return allMdx.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.frontmatter.staticPreview,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.parent.name,
                guid: site.siteMetadata.siteUrl + edge.node.parent.name,
              })
            })
          },
          query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date]},
                filter: {
                  frontmatter: {
                    tags: {
                      glob: "${glob}"
                    }
                  }
                }
              ) {
                edges {
                  node {
                    parent {
                      ... on File {
                        name
                        relativePath 
                      }
                    }
                    frontmatter {
                      title
                      date
                      staticPreview
                    }
                  }
                }
              }
            }
          `,
          output: feedName,
          title: title,
        },
      ],
    },
  }
}

module.exports = {
  siteMetadata: {
    title: 'Noah Gilmore',
    description: "Noah Gilmore's Development Blog",
    siteUrl: "https://noahgilmore.com"
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/BlogPageLayout.jsx")
        }
      }
    },
    `gatsby-plugin-force-trailing-slashes`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-styled-components`,
    rssFeedPlugin("*ios*", '/blog/ios.xml', "Noah Gilmore's Development Blog: iOS"),
    rssFeedPlugin("*web*", '/blog/web.xml', "Noah Gilmore's Development Blog: Web"),
    rssFeedPlugin("*", '/blog/rss.xml', "Noah Gilmore's Development Blog")
  ]
}
