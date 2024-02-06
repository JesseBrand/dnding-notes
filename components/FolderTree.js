import { PropTypes } from 'prop-types'
import { TreeView, TreeItem } from '@mui/x-tree-view'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles'
import { getFlattenArray } from '../lib/page_utils'

const TCTreeItem = styled(TreeItem)(({ theme }) => ({
  '& .MuiTreeItem-content': {
    '& .MuiTreeItem-label': {
      fontSize: '1rem',
      paddingLeft: '6px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,',
      lineHeight: 2.0
    }
  }
}))

export default function FolderTree (props) {
  const renderTree = (nodes) => (
        <TCTreeItem key={nodes.id} nodeId={nodes.id} label={nodes.label}>
            {Array.isArray(nodes.children)
              ? nodes.children.map((node) => renderTree(node))
              : null}
        </TCTreeItem>
  )

  const router = useRouter()
  // const childrenNodeIds = props.tree.children.map(aNode => {return aNode.id})
  const expandedNodes = [props.tree.id]
  const flattenNodes = getFlattenArray(props.tree)
  return (
        <TreeView
            aria-label="rich object"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={expandedNodes}
            defaultExpandIcon={<ChevronRightIcon />}
            onNodeSelect={(event, nodIds) => {
              const currentNode = flattenNodes.find(aNode => {
                return aNode.id === nodIds
              })
              if (nodIds === 'progression_id') {
                router.push('/progression')
              } else if (currentNode != null && currentNode.routePath != null) {
                router.push(currentNode.routePath)
              }
            }}
            sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            <TCTreeItem key={'progression_key'} nodeId={'progression_id'} label={'Progression'} />
            {renderTree(props.tree)}

        </TreeView>
  )
}
FolderTree.propTypes = {
  props: PropTypes.any,
  tree: PropTypes.any

}
