// Step 1: Import
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Thomas and Melissa engagement photo"
        src="../images/engagement_shoot_1.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage