import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"

import bgImage from "../media/phones.png"
import CompatBtn from "../components/compatbtn"

const NotFoundPage = () => {

  return (
    <Layout>
        <Hero bg={bgImage}>
        <h1 className="mb-5 text-5xl font-bold">Not found</h1>
            <p className="mb-5 text-lg">Sorry 😔. We couldn’t find what you were looking for.</p>
            <CompatBtn autoFocus={true} className="btn-primary" href="/">Home</CompatBtn>
        </Hero>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
