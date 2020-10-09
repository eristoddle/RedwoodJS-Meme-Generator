import { Link, routes } from '@redwoodjs/router'

const MemeLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li className="sitename">
              <Link to={routes.home()}>Meme Generator</Link>
            </li>
            <li>
              <Link to={routes.memes()}>Your Memes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <article>{children}</article>
    </>
  )
}

export default MemeLayout
