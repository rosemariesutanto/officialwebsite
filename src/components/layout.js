import * as React from "react"
import { Link } from "gatsby"
import Background from "../images/water.jpg";
import Navbar from './Navbar.js'
import "@fontsource/roboto-mono"
import '../styles/global.css'


const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <Navbar />
            <title>{pageTitle}</title>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <footer>Copyright © 2021. All Rights Reserved.</footer>
        </div>
    )
}

export default Layout