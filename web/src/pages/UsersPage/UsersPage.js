import { Link, routes } from '@redwoodjs/router'

const UsersPage = () => {
  return (
    <>
      <h1>UsersPage</h1>
      <p>
        Find me in <tt>./web/src/pages/UsersPage/UsersPage.js</tt>
      </p>
      <p>
        My default route is named <tt>users</tt>, link to me with `
        <Link to={routes.users()}>Users</Link>`
      </p>
    </>
  )
}

export default UsersPage
