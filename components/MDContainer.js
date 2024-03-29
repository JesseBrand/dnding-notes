import { useState } from 'react'
import MDContent from './MDContent'
import { PropTypes } from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

function MDContainer ({ post, fileNames }) {
  const [posts, setPosts] = useState([post])

  function handleClick (content) {
    // console.log(content)
    setPosts(prevPosts => {
      return [...prevPosts, content]
    })
  }

  return (
        <div className="Container">
            {posts.map(p => (
                <MDContent key={uuidv4()} content={p} handleOpenNewContent={handleClick} fileNames={fileNames}/>
            ))}
        </div>
  )
}

MDContainer.propTypes = {
  post: PropTypes.any,
  fileNames: PropTypes.any
}

export default MDContainer
