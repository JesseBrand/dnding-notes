import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import {
  getSinglePost,
  getLocalGraphData,
  constructGraphData,
  getTree
} from '../lib/utils'
import FolderTree from '../components/FolderTree'

import MDContent from '../components/MDContent'

export default function Home ({ content, tree, flattenNodes, backLinks }) {
  return (
        <Layout>
            <div className='container'>
                <nav className="nav-bar">
                    <FolderTree tree={tree} />
                </nav>
                <MDContent content={content} handleOpenNewContent={null} backLinks={backLinks} />
            </div>
        </Layout>
  )
}

Home.propTypes = {
  content: PropTypes.any,
  backLinks: PropTypes.any,
  tree: PropTypes.any,
  flattenNodes: PropTypes.any
}

const { nodes, edges } = constructGraphData()

export function getStaticProps () {
  const tree = getTree()
  const contentData = getSinglePost('index')
  const listOfEdges = edges.filter(anEdge => anEdge.target === 'index')
  const internalLinks = listOfEdges.map(anEdge => nodes.find(aNode => aNode.slug === anEdge.source)).filter(element => element !== undefined)
  const backLinks = [...new Set(internalLinks)]

  const graphData = getLocalGraphData('index')
  return {
    props: {
      content: contentData.data,
      tree,
      graphData,
      backLinks
    }
  }
}
