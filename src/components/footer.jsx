import React from "react"

const Footer = () => (
    <footer class="footer footer-center p-10 mt-15 bg-base-200 text-base-content rounded gap-2">
        <div class="grid grid-flow-col gap-4">
            <a class="link link-hover" href="https://github.com/recloudstream/">Github</a>
            <a class="link link-hover" href="https://gitdab.com/recloudstream">Git Mirror</a>
            <a class="link link-hover" href="https://discord.gg/5Hus6fM">Discord</a>
            <a class="link link-hover" href="https://matrix.to/#/#lagrapps:matrix.org">Matrix</a>
            <a class="link link-hover" onClick={() => {window.open("https://www.youtube.com/watch?v=f-UIBVsRSDQ")}}>DMCA</a>
        </div>
        <div>
            <p>Website by <a className="link" href="https://github.com/c10udburst" target="_blank">Cloudburst</a></p>
        </div>
    </footer>)

export default Footer