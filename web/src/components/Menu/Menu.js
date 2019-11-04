import PopularTagsCell from 'src/components/PopularTagsCell'
import RecentPostsCell from 'src/components/RecentPostsCell'
import SearchBar from 'src/components/SearchBar'

const Menu = (props) => {
  return (
    <aside className="hidden sm:block w-1/3 mt-8 pr-8">
      <SearchBar />
      <nav className="mt-8">
        <RecentPostsCell />
        <PopularTagsCell />
      </nav>
    </aside>
  )
}

export default Menu
