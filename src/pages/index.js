import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Navbar from "../components/Navbar";
import Styles from "../styles/home.module.css"

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
          <h1 style={titleStyle}>Welcome!</h1>
          <h1>. . .</h1>
          <p>This site is a work in progress...</p>
          <p style={crosses}>+ + +</p>
         </Layout>
      </div>
    </main>
  )
}


export default IndexPage
