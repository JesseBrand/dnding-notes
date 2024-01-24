import { PropTypes } from 'prop-types'
import { useRouter } from 'next/router'

function BackLinks ({ linkList }) {
  return (<div className="note-footer">
            <h3 className="backlink-heading">Link to this note</h3>
        {(linkList != null && linkList.length > 0)
          ? <>

                <div className="backlink-container">
                    {linkList.map(aLink =>
                        <div key={aLink.slug} className="backlink">
                            {/* <Link href={aLink.slug}> */}
                            <a href={aLink.slug}>
                                <p className="backlink-title">{aLink.title}</p>
                                <p className="backlink-preview">{aLink.shortSummary} </p>
                            </a>
                            {/* </Link> */}
                        </div>
                    )}
                </div>
            </>
          : <> <p className="no-backlinks"> No backlinks found</p> </>}
    </div>)
}
BackLinks.propTypes = {
  linkList: PropTypes.any
}

function MDContent ({ content, backLinks }) {
  useRouter()
  return (

         <div className="markdown-rendered">
            <div dangerouslySetInnerHTML={{ __html: content }}/>
            <div>
                <BackLinks linkList={backLinks}/>
            </div>
            <hr/>
            <footer>
                <p>Powered by  <a href="https://github.com/TuanManhCao/digital-garden">Mind Stone</a>, © 2022</p>
            </footer>
        </div>
  )
}

MDContent.propTypes = {
  content: PropTypes.any,
  backLinks: PropTypes.any
}

export default MDContent
