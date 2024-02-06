import Layout from '../components/Layout'
import FolderTree from '../components/FolderTree'
import CharacterView from '../components/dnding-characters/character-view'
import PropTypes from 'prop-types'
import {
  getDirectoryData,
  convertObject
} from '../lib/utils'

export default function Progression ({ tree, flattenNodes }) {
  return (
        <Layout>
            <div className = 'container'>
                <nav className="nav-bar">
                    <FolderTree tree={tree} flattenNodes={flattenNodes}/>
                </nav>
                <CharacterView />
            </div>
        </Layout>
  )
}

Progression.propTypes = {
  tree: PropTypes.any,
  flattenNodes: PropTypes.any
}

export function getStaticProps () {
  const tree = convertObject(getDirectoryData())

  return {
    props: {
      tree
    }
  }
}
