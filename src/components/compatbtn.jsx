import React, { useEffect } from "react";
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { Link, navigate } from "gatsby";


const isBrowser = typeof window !== "undefined"

function CompatBtn({autoFocus, href, onClick, group, target, children, className, ...props}) {
    const { ref, focused, focusSelf} = useFocusable();

    useEffect(() => {
        if (!autoFocus) return;
        focusSelf()        
    }, [focusSelf])

    if (onClick) href = "#!"

    if (focused && ref.current) {
        ref.current?.focus()
    }

    useEffect(() => {
        if (isBrowser) {
            window.addEventListener("keyup", (ev) => {
                if (document.activeElement !== ref.current) return;
                if (ev.key === "Enter" || ev.key === " ") {
                    ref.current?.click()
                }
            })
        }
    }, [])
    

    if (target !== "_blank" && !group && !onClick) {
        return <Link to={href} className={`btn ${className||""}`} ref={ref} {...props}>{children}</Link>
    } else if (!group && !onClick) {
        return <a href={href} target="_blank" className={`btn ${className||""}`} ref={ref} {...props}>{children}</a>
    } else {
        return <button className={`btn ${className||""}`} ref={ref} {...props} onClick={() => {
            if (onClick) {
                onClick()
            } else if (target === "_blank") {
                window.open(href)
            } else {
                navigate(href)
            }
        }}>{children}</button>
    }
}

export default CompatBtn