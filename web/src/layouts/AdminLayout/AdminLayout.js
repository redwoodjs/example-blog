import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const AdminLayout = (props) => {
  const { logout } = useAuth()

  return (
    <div className="mx-8">
      <header className="block md:flex justify-between items-center pt-4 pb-4 px-8 border-b">
        <div>
          <Link
            to={routes.home()}
            className="text-xs text-gray-500 hover:text-gray-800"
          >
            &laquo; Back to Site
          </Link>
          <h1>
            <Link
              to={routes.admin()}
              className="text-xl font-semibold leading-none"
            >
              Hammer Review Admin
            </Link>
          </h1>
        </div>
        <nav className="text-right">
          <a
            href="#"
            onClick={logout}
            className="text-indigo-500 hover:text-indigo-800 text-xs uppercase"
          >
            Logout
          </a>
        </nav>
      </header>
      <main className="flex mt-2 px-8 pb-8">
        <aside className="hidden md:block w-64 mt-4">
          <nav>
            <ul>
              <li>
                <Link
                  to={routes.admin()}
                  className="font-semibold text-indigo-700"
                >
                  All Posts
                </Link>
              </li>
              <li className="mt-8">
                <Link
                  to={routes.adminNew()}
                  className="bg-indigo-700 hover:bg-indigo-600 text-white text-xs px-3 py-2 uppercase tracking-wide rounded"
                >
                  + New Post
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <section className="flex-1 mt-4">{props.children}</section>
      </main>
    </div>
  )
}

export default AdminLayout
