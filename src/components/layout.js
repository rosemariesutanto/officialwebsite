import * as React from "react"
import { Link } from "gatsby"
import Background from "../images/water.jpg";

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    // backgroundImage: `url(${Background})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover"
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