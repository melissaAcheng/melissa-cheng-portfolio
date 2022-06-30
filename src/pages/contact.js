// 1. Import React and Layout from components (for the navbar)
import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/contact.module.css'

// 2. Define your component
const ContactPage = () => {
    return (
        <Layout pageTitle="Contact Me">
            <div className={styles.contact}>
                <p>Whether you'd like to connect with me about coding, music, or teaching, I'd love to hear from you!</p>
                <div className={styles.socials}>
                    <p>Email</p>
                    <p>LinkedIn</p>
                    <p>GitHub</p>
                </div>
            </div>
        </Layout>
    )
}

// 3. Export your component
export default ContactPage