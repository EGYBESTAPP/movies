import React from "react"

import {FaDiscord, FaGithub, FaBars} from "react-icons/fa"
import {SiMatrix} from "react-icons/si"
import Button from "./navbar/button"

import logo from "../media/icon.svg"
import { Link } from "gatsby"

const Navbar = () => (
<div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur text-primary-content">
    <nav className="navbar w-full">
        <div className="navbar-start flex flex-0 md:gap-1 lg:gap-2">
            <span className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="Menu">
                <label for="drawer" className="btn btn-square btn-ghost drawer-button text-xl text-base-content">
                    <FaBars />
                </label>
            </span>
        </div>
        <div className="flex navbar-center items-center gap-2">
            <Link className="flex flex-0 btn btn-ghost gap-4 text-base-content" to="/">
                <img src={logo} alt="Logo" className="object-contain h-12 w-12" />
                <span className="hidden md:inline">Cloudstream</span>
            </Link>
        </div>
        <div className="flex flex-0 navbar-end text-base-content">
            <Button name="Matrix" url="https://matrix.to/#/#lagrapps:matrix.org">
                <SiMatrix />
            </Button>
            <Button name="Discord" url="https://discord.gg/5Hus6fM">
                <FaDiscord />
            </Button>
            <Button name="GitHub" url="https://github.com/recloudstream/">
                <FaGithub />
            </Button>
        </div>
    </nav>
</div>
)

export default Navbar