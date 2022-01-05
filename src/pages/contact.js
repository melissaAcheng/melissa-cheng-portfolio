// 1. Import React and Layout from components (for the navbar)
import * as React from 'react'
import Layout from '../components/layout'

// 2. Define your component
const ContactPage = () => {
    return (
        <Layout pageTitle="Contact Me">
            <p>I'd love to hear from you</p>
        </Layout>
    )
}

// 3. Export your component
export default ContactPage