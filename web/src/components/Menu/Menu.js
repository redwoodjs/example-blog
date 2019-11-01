import PopularTags from 'src/components/PopularTags'
import RecentPosts from 'src/components/RecentPosts'
import SearchBar from 'src/components/SearchBar'

const Menu = (props) => {
  return (
    <aside className="hidden sm:block w-1/3 mt-8 pr-8">
      <SearchBar />
      <nav className="mt-8">
        <RecentPosts />
        <PopularTags />
      </nav>
    </aside>
  )
}

export default Menu
