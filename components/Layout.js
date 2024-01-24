import { PropTypes } from 'prop-types'

export const siteTitle = 'Digital Backroom - An Internet Archive'
export default function Layout ({ children }) {
  return (
        <div>
            <main className= "theme-dnd">
                {children}
            </main>
        </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}
