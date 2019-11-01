import Tag from 'src/components/Tag'

const TagList = ({ tags }) => {
  return tags.map((tag) => (
    <li key={tag.id} className="inline-block mr-1">
      <Tag name={tag.name} />
    </li>
  ))
}

export default TagList
