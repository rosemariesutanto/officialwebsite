import * as React from "react"
import { Link } from "gatsby"
import Background from "../images/water.jpg";
import "@fontsource/roboto-mono"

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "roboto mono",
    // backgroundImage: `url(${Background})`,
    textAlign: "center"
  }

const Layout = ({ pageTitle, children }) => {
    return (
        <div style={pageStyles}>
            <title>{pageTitle}</title>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout