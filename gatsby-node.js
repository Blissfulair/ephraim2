const path = require('path');
const slash = require(`slash`);
const createPaginatedPost = require('gatsby-paginate');

module.exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions;
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
          }
        }
      }
      allWordpressWpEvent{
        edges {
           node {
             id
             slug
             title
             acf{
               location
               date
             }
           }
       }
     }
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            template
            format
            title
            slug
            excerpt
            author {
              name
            }
            date(formatString: "MMMM DD, YYYY")
            featured_media {
              localFile {
                childImageSharp {
                  resolutions(width:700, height:400) {
                    src
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const {
    allWordpressPage,
    allWordpressWpEvent,
    allWordpressPost
  } = result.data

  createPaginatedPost({
    edges: allWordpressPost.edges,
    createPage: createPage,
    pageTemplate: 'src/templates/blog.jsx',
    pageLength: 2,
    pathPrefix: 'blog'
  })

  createPaginatedPost({
    edges: allWordpressWpEvent.edges,
    createPage: createPage,
    pageTemplate: 'src/templates/event.jsx',
    pageLength: 12,
    pathPrefix: 'event'
  })

  const postTemplate = path.resolve(`./src/templates/post.jsx`);

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  // const eventTemplate = path.resolve(`./src/templates/event.jsx`);

  // allWordpressWpEvent.edges.forEach(edge => {
  //   createPage({
  //     path: `/event/${edge.node.slug}/`,
  //     component: slash(eventTemplate),
  //     context: {
  //       id: edge.node.id,
  //     },
  //   })
  // })
}