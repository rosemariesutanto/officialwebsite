import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout'


// styles

const titleStyle = {
  fontSize: 42
}

const link = {
  textDecoration: "none",
  color: "black"
}

const crosses = {
  marginTop: 54
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
          <h1>. . .</h1>
          <p>In the meantime, find me on IG: <a href="https://www.instagram.com/rosemariesutanto" style={link}>@rosemariesutanto</a></p>
          <p style={crosses}>+ + +</p>
         </Layout>
      </div>
    </main>
  )
}


export default IndexPage
