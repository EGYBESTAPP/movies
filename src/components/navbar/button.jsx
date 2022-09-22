import React from "react"

const Button = ({url, children, name}) => (
    <span className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip={name}>
    <div className="flex-none items-center">
        <a className="btn btn-ghost drawer-button btn-square text-xl" href={url || "#!"} target="_blank">
            {children}
        </a>
    </div>
</span>
)

export default Button