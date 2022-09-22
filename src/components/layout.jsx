import React from "react"

import Navbar from "./navbar"
import Drawer from "./drawer"
import Footer from "./footer"

import './layout.css'

const Layout = ({ children }) => (
    <div className="drawer bg-base min-h-screen">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content items-center flex flex-none flex-col min-h-screen">
            <Navbar />
            <div className="pb-10 px-5 w-full text-base-content grow">
                {children}
            </div>
            <Footer />
        </div>
        <div className="drawer-side">
            <label for="drawer" className="drawer-overlay backdrop-blur-sm"></label>
            <Drawer />
        </div>
    </div>
)

export default Layout
