import React from "react";
import { Link } from "gatsby";
import { node2slug } from "../../utils";

const DocsCard = ({ md, width }) => {

    return <article className={"card card bg-base-200 shadow-xl mx-10 mb-5 " + (width || "w-full md:w-2/3")}>
        <div className="card-body">
            <h2 className="card-title">{md.frontmatter.title}</h2>
            <p>
                {md.excerpt}
            </p>
            <div className="card-actions justify-end">
                <Link to={node2slug(md)} className="btn btn-primary">View</Link>
            </div>
        </div>
    </article>
}

export default DocsCard