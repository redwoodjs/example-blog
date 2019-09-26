import Header from 'src/components/Header'
import Menu from 'src/components/Menu'

export default (props) => {
  return (
    <div className="container mx-auto">
      <div className="mx-8 bg-white shadow">
        <Header />
        <main className="flex px-8 pb-8">
          <Menu articles={props.articles} />
          <section className="flex-1 mt-4">{props.children}</section>
        </main>
        <footer className="bg-indigo-600 text-indigo-200 text-sm text-center py-4">
          Copyright ©2019 Hammers, Inc.
        </footer>
      </div>
    </div>
  )
}
