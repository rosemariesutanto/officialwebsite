import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Background from "../images/water.jpg";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundImage: `url(${Background})`,
  backgroundPosition: "bottom",
  backgroundSize: "cover"
}

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
    <main style={pageStyles}>
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
