import React from "react"

import "./hero.css"

const Hero = ({bg, children}) => (
    <div className="hero hero-full min-h-screen" style={{backgroundImage: `url(${bg})`}}>
    <div className="hero-overlay bg-opacity-60" />
    <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
            {children}
        </div>
    </div>
</div>
)

export default Hero