import { Link, routes } from '@redwoodjs/router'

const ImagePage = () => {
  return (
    <>
      <h1>ImagePage</h1>
      <p>
        Find me in <tt>./web/src/pages/ImagePage/ImagePage.js</tt>
      </p>
      <p>
        My default route is named <tt>image</tt>, link to me with `
        <Link to={routes.image()}>Image</Link>`
      </p>
    </>
  )
}

export default ImagePage
