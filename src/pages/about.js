import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout'

const AboutPage = () => {
    return (
    <main>
        <Layout pageTitle="About Me">
            <h1> ma name Ros.</h1>
            <Link to="/">Go Home</Link>        
        </Layout>
    </main>
    )
}

export default AboutPage;