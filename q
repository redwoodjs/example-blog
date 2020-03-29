  query Q {
    post: findPostById(id: 9) {
      id
      title
      tags {
        id
        name
      }
    }
  }
