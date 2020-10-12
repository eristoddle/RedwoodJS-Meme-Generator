import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const MemeLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated } = useAuth()
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
            <li>
              <button href="#" onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <article>{children}</article>
    </>
  )
}

export default MemeLayout
