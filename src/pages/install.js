import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import CompatBtn from "../components/compatbtn"

import bgImage from "../media/phones.png"

const InstallPage = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://api.github.com/repos/recloudstream/cloudstream/releases")
            .then(r => r.json())
            .then(r => {
                let btns = []
                let nonPre = false
                let Pre = false;
                for (const entry of r) {
                    if (Pre && nonPre) continue;
                    console.log({Pre, nonPre, entry})
                    var apk = null;
                    for (const asset of entry.assets) {
                        if (asset.content_type !== "application/vnd.android.package-archive") continue;
                        apk = asset;
                    }
                    if (!apk) continue;

                    if (entry.prerelease || entry.tag_name === "pre-release") {
                        if (!Pre) {
                            btns.push({
                                pre: true,
                                url: entry.html_url,
                                apk: apk,
                                tag: entry.tag_name
                            })
                            Pre = true
                        }
                    } else if (!nonPre) {
                        btns.push({
                            pre: false,
                            url: entry.html_url,
                            apk: apk,
                            tag: entry.tag_name
                        })
                        nonPre = true
                    }
                }
                setData({ btns })
            })
    }, [setData])

    return <Layout>
        <Hero bg={bgImage}>
            <h1 className="mb-5 text-5xl font-bold">Installation</h1>
            {(data != null) &&
                <div className="flex flex-col items-center gap-3">{
                    data.btns.map((it, idx) => {
                        return <div className="btn-group" key={JSON.stringify(it)}>
                            <CompatBtn group={true} autoFocus={idx === 0}
                                className={it.pre?'btn-secondary':'btn-primary'}
                                href={it.apk.browser_download_url}
                                target="_blank">Download {it.tag}</CompatBtn>
                            <CompatBtn
                                group={true}
                                href={it.url}
                                target="_blank">Release notes</CompatBtn>
                        </div>
                    })}
                </div>
            }
            {(data == null) &&
                <a href="https://github.com/recloudstream/cloudstream/releases/download/pre-release/app-prerelease.apk" className="btn btn-primary">Download pre-release</a>
            }
        </Hero>
    </Layout>

}

export function Head() {
    return (
        <>
            <title>Cloudstream installation</title>
            <meta property="og:title" content="Cloudstream" />
            <meta property="og:description" content="Cloudstream is an Android app for streaming and downloading Movies, TV-Series and Anime." />
            <meta property="og:image" content={bgImage} />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />
        </>
    )
}

export default InstallPage
