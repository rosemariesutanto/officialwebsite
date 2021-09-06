import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout'


// styles

const titleStyle = {
  fontSize: 86
}

// data
const links = [
  {
    text: "Instagram",
    url: "https://www.instagram.com/rosemariesutanto/",
    description:
      "Follow me on Instagram",
    color: "#E95800",
  },
]

// markup
const IndexPage = () => {
  return (
    <main>
      <div>
        <title>ROSEMARIE SUTANTO</title>
          <Layout pageTitle="Home Page">
          <h1 style={titleStyle}>Coming Soon.</h1>
            <p>I'm making this by following the Gatsby Tutorial.</p>
         </Layout>
      </div>
    </main>
  )
}


export default IndexPage
