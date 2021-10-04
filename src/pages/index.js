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
          <Layout pageTitle="">
          <h1 style={titleStyle}>Coming Soon</h1>
         </Layout>
      </div>
    </main>
  )
}


export default IndexPage
