import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import bgImage from "../media/phones.png"
import DocsCard from "../components/cards/docs"
import { node2slug } from "../utils";

import rehypeReact from "rehype-react"

function DivMixin(props) {
  if (props?.class != null && props.class.includes("gatsby-highlight")) {
    props.class = props.class + " mockup-code mb-5"
  }
  return <div {...props} />
}

const componentMap = {
  div: DivMixin,
  a: (props) => {
    return <Link className="link" to={props?.href} {...props} />
  },
  kbd: (props) => {
    return <kbd className="kbd bg-base-300" {...props} />
  },
  ol: (props) => {
    return <ul className="steps steps-vertical" {...props} />
  },
  li: (props) => {
    return <li className="step" {...props} />
  },
  table: (props) => {
    return <table className="table w-full" {...props} />
  },
  tr: (props) => {
    return <tr className="hover" {...props} />
  },
  hr: (props) => {
    return <div className="divider" {...props} />
  }
}


export default function PageTemplate({ data: { markdownRemark, allMarkdownRemark } }) {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: componentMap,
    Fragment: ({ children }) => {
      return <div className="prose contents">{children}</div>
    }
  }).Compiler

  const filtered = allMarkdownRemark.nodes.filter(it => it.frontmatter.parent === markdownRemark.frontmatter.title).map(it => {
    return <DocsCard md={it} key={it} width="w-full" />
  })

  return (
    <Layout>
      <div className="flex items-center w-full flex-col">
        <div className="text-sm breadcrumbs md-5">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/docs">Documentation</Link></li>
            <li>{markdownRemark.frontmatter.title}</li>
          </ul>
        </div>
        <div className="w-full mx-10 md:w-2/3 card bg-base-200 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-xl">{markdownRemark.frontmatter.title}</h1>
            {renderAst(markdownRemark.htmlAst)}
          </div>
        </div>
        <div className="alert shadow-lg w-full mx-auto md:w-2/3 mt-5">
          <div>
            <div>
              <h3 className="font-bold">Edit on GitHub</h3>
              <div className="text-xs">If you see a mistake here, you can open a pull request</div>
            </div>
          </div>
           <div className="flex-none">
             <a 
                className="btn btn-primary btn-sm"
                href={`https://github.com/recloudstream/recloudstream.github.io/blob/master/src/pages${node2slug(markdownRemark)}`}
                target="_blank">Edit</a>
           </div>
        </div>
        {filtered.length > 0 && <>
          <div className="divider text-xl mt-5">Children</div>
          <div className="grid gap-5 w-full px-10 place-items-center auto-rows-max grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filtered}
          </div></>}
      </div>
    </Layout>
  )
}

export function Head({ data }) {
  return (
    <>
      <title>{data.markdownRemark.frontmatter.title}</title>
      <meta property="og:title" content={data.markdownRemark.frontmatter.title} />
      <meta property="og:description" content={data.markdownRemark.excerpt} />
      <meta property="og:image" content={bgImage} />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary_large_image" />
    </>

  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      fileAbsolutePath
      excerpt
      htmlAst
    }
    allMarkdownRemark(
      sort: {fields: frontmatter___order}
      filter: {frontmatter: {parent: {ne: null}}}
    ) {
      nodes {
        frontmatter {
          title
          order
          parent
        }
        fileAbsolutePath
        excerpt
      }
    }
  }
`
