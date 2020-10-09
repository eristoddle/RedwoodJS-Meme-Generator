import { Link, routes } from '@redwoodjs/router'
import MemeLayout from 'src/layouts/MemeLayout'

const MemesPage = () => {
  return (
    <MemeLayout>
      <h1>MemesPage</h1>
      <p>
        Find me in <tt>./web/src/pages/MemesPage/MemesPage.js</tt>
      </p>
      <p>
        My default route is named <tt>memes</tt>, link to me with `
        <Link to={routes.memes()}>Memes</Link>`
      </p>
    </MemeLayout>
  )
}

export default MemesPage
