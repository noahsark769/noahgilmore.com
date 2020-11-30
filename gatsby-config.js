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
                // Hardcoding the "/blog/" here is brittle since it makes the RSS
                // feed dependent on the directory structure, but I can't figure
                // out how to extract the actual public path from the graphql query.
                // If you're seeing this and can help, please let me know at
                // twitter.com/noahsark769, thanks :D
                url: site.siteMetadata.siteUrl + "/blog/" + edge.node.parent.name,
                guid: site.siteMetadata.siteUrl + "/blog/" + edge.node.parent.name
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/BlogPageLayout.jsx")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-vscode`,
            // All options are optional. Defaults shown here.
            options: {
              colorTheme: {
                defaultTheme: 'Dark+ (default dark)',    // Required
                // prefersDarkTheme: 'Monokai', // Optional: used with `prefers-color-scheme: dark`
                // prefersLightTheme: 'Solarized Light'    // Optional: used with `prefers-color-scheme: light`
              },
              injectStyles: false,
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false
            }
          },
        ],
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    rssFeedPlugin("*apple*", '/blog/apple.xml', "Noah Gilmore's Development Blog: Apple Platform Development"),
    rssFeedPlugin("*ios*", '/blog/ios.xml', "Noah Gilmore's Development Blog: iOS"),
    rssFeedPlugin("*web*", '/blog/web.xml', "Noah Gilmore's Development Blog: Web"),
    rssFeedPlugin("*", '/blog/rss.xml', "Noah Gilmore's Development Blog"),
    `gatsby-plugin-postcss`
  ]
}
