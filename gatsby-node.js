const path = require(`path`)
const { node2slug } = require(`./src/utils.js`)
const template = path.resolve(`./src/templates/default.jsx`)

// Rest of createPages API...
exports.createPages = async ({ graphql, actions }) => {
    const {data} = await graphql(`
  {
    allMarkdownRemark {
            nodes {
                id
                frontmatter {
                    title
                }
                fileAbsolutePath
            }
        }
    }
`)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: node2slug(node),
            component: `${template}?__contentFilePath=${node.fileAbsolutePath}`,
            context: {
                id: node.id,
            },
        })
    })
}

exports.onCreateWebpackConfig = ({ getConfig, actions, stage }) => {
    const webpackConfig = getConfig()
  
    if (stage === "build-javascript") {
      const dependencyRulesIndex = webpackConfig.module.rules.findIndex(
        (rule) => {
          return (
            rule.test &&
            rule.test.toString() === "/\\.(js|mjs)$/" &&
            typeof rule.exclude === "function"
          )
        }
      )
  
      webpackConfig.module.rules.splice(dependencyRulesIndex, 1)
    }
  
    actions.replaceWebpackConfig(webpackConfig)
  }