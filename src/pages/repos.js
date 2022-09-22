import React, {useEffect, useState} from "react"

import Layout from "../components/layout"
import RepoCard from "../components/cards/repo"
import AdbConnect from "../components/adbconnect"
import bgImage from "../media/phones.png"

import { TiWarning } from "react-icons/ti";
import { GoVerified } from "react-icons/go";
import { IconContext } from "react-icons";

const IndexPage = () => {
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/recloudstream/cs-repos/master/repos-db.json")
            .then(r => r.json())
            .then(data => {
                setRepos(data)
            })
    }, [setRepos])

    return <Layout>
        <div className="flex items-center w-full flex-col">
            <div className="alert alert-warning shadow-lg w-full mx-10 md:w-2/3 mb-5">
                <div>
                    <TiWarning className="stroke-current flex-shrink-0 h-6 w-6"/>
                    <div>
                        <h3 className="font-bold text-xl">Keep in mind that the extensions can execute arbitrary code inside the app.</h3>
                        <span className="text-xs">
                            This means you should treat them with the same level of scrutiny you treat any apps. Extensions can also read all of the Cloudstream's data.
                        </span>
                        <br />
                        <IconContext.Provider value={{className: 'inline-block'}}>
                            <span className="text-xs">
                                Repos with a <GoVerified class="stroke-current flex-shrink-0 mx-1" /> are constantly audited by the app developers so you can probably trust them.
                            </span>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <AdbConnect />
            {repos &&
                repos.map((it, index) => <RepoCard repoData={it} key={index} isFirst={index===0}/>)
            }
        </div>
    </Layout>

}

export function Head() {
    return (
        <>
            <title>Cloudstream Repositories</title>
            <meta property="og:title" content="Cloudstream Repositories" />
            <meta property="og:description" content="Cloudstream is an Android app for streaming and downloading Movies, TV-Series and Anime." />
            <meta property="og:image" content={bgImage} />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />
        </>
    )
}

export default IndexPage
