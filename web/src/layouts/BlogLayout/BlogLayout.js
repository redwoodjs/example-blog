import Menu from 'src/components/Menu'
import logo from './logo.png'

const BlogLayout = (props) => {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="sm:mx-8">
        <header className="md:flex flex-wrap items-center border-b-4 border-indigo-300 bg-indigo-600 text-white px-8 py-6 ">
          <div className="flex flex-1">
            <div className="flex-grow mt-1 text-center md:text-left">
              <img
                className="w-56 inline-block"
                src={logo}
                alt="Hammer Review Logo"
              />
            </div>
          </div>
          <nav className="flex-grow sm:flex-grow-0 min-h-screenmt-4 mt-4 md:mt-0">
            <ul className="flex justify-center">
              <li className="mx-4 font-semibold uppercase">
                <a
                  href="/about"
                  className="text-indigo-200 hover:text-indigo-800"
                >
                  About
                </a>
              </li>
              <li className="mx-4 font-semibold uppercase">
                <a
                  href="/contact"
                  className="text-indigo-200 hover:text-indigo-800"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex items-start">
          <Menu />
          <section className="flex-1 pt-4 px-8 bg-white shadow">
            {props.children}
          </section>
        </main>
        <footer className="bg-indigo-600 text-indigo-200 text-sm text-center py-4">
          Copyright ©2019 Hammers, Inc.
        </footer>
      </div>
    </div>
  )
}

export default BlogLayout
