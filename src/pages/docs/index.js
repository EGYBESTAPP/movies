import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import DocsCard from "../../components/cards/docs"
import bgImage from "../../media/phones.png"

const DocsPage = () => {

    return <Layout>
        <div className="flex items-center w-full flex-col">
            <article className="card bg-base-200 shadow-xl mx-10 mb-5 w-full md:w-2/3">
                <div className="card-body">
                    <h2 className="card-title">Dokka</h2>
                    <p>Basically javadoc</p>
                    <div className="card-actions justify-end">
                        <a href="/dokka/" className="btn btn-primary">View</a>
                    </div>
                </div>
            </article>
            <StaticQuery
                query={graphql`
                query {
                    allMarkdownRemark(
                        sort: {fields: frontmatter___order}
                        filter: {frontmatter: {parent: {eq: null}}}
                    ) {
                            nodes {
                                id
                                frontmatter {
                                    title
                                }
                                excerpt
                                fileAbsolutePath
                            }
                        }
                    }
            `}
                render={data => (
                    <>{data.allMarkdownRemark.nodes.map(it => {
                        return <DocsCard md={it} key={it} />
                    })}</>
                )}
            />
        </div>
    </Layout>

}

export default DocsPage


export function Head() {
    return (
        <>
            <title>Cloudstream Docs</title>
            <meta property="og:title" content="Cloudstream Docs" />
            <meta property="og:description" content="Cloudstream is an Android app for streaming and downloading Movies, TV-Series and Anime." />
            <meta property="og:image" content={bgImage} />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />
        </>
    )
}
