import MenuCell from 'src/cells/MenuCell'

const BlogLayout = (props) => {
  return (
    <div className="container mx-auto">
      <div className="mx-8 bg-white shadow">
        <header className="flex items-center border-b-4 border-indigo-300 bg-indigo-600 text-white px-8 py-12 ">
          <div className="flex flex-1">
            <div className="mt-1">
              <h1>
                <a href="/" className="text-5xl font-semibold leading-none">
                  Hammer Review
                </a>
              </h1>
              <h2 className="text-base -mt-1 font-light text-indigo-200">
                All the hammers
              </h2>
            </div>
          </div>
          <nav>
            <ul className="flex">
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
        <main className="flex px-8 pb-8">
          <MenuCell />
          <section className="flex-1 mt-4">{props.children}</section>
        </main>
        <footer className="bg-indigo-600 text-indigo-200 text-sm text-center py-4">
          Copyright ©2019 Hammers, Inc.
        </footer>
      </div>
    </div>
  )
}

export default BlogLayout
