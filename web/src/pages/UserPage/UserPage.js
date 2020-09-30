import { Link, routes } from '@redwoodjs/router'

const UserPage = () => {
  return (
    <>
      <h1>UserPage</h1>
      <p>
        Find me in <tt>./web/src/pages/UserPage/UserPage.js</tt>
      </p>
      <p>
        My default route is named <tt>user</tt>, link to me with `
        <Link to={routes.user()}>User</Link>`
      </p>
    </>
  )
}

export default UserPage
