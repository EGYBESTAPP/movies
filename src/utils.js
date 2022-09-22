function node2slug(node) {
    return node.fileAbsolutePath.replace(/^.+\/docs/g, "/docs")
}

module.exports = {
    node2slug: node2slug
}