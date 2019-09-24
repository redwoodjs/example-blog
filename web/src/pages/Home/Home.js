import { useQuery, useMutation, gql } from "@hammerframework/hammer-web";

const USERS_ALL = gql`
  query usersAll {
    users {
      id
      email
      isAdmin
    }
  }
`;

const USERS_ADD = gql`
  mutation usersCreate($email: String!) {
    usersCreate(email: $email) {
      id
      email
      isAdmin
    }
  }
`;

const Home = () => {
  const [addUser] = useMutation(USERS_ADD, {
    update(
      cache,
      {
        data: { usersCreate }
      }
    ) {
      const { users } = cache.readQuery({ query: USERS_ALL });
      cache.writeQuery({
        query: USERS_ALL,
        data: { users: users.concat([usersCreate]) }
      });
    }
  });

  const { loading, error, data } = useQuery(USERS_ALL);

  return (
    <>
      <h1>Users</h1>

      {error && <p>{error}</p>}

      {loading ? (
        "loading..."
      ) : (
        <ol>
          {data.users.map(({ email }) => {
            return <li key={"users" + email}>{email}</li>;
          })}
        </ol>
      )}

      <button
        onClick={() => {
          const localPart = Math.random()
            .toString(36)
            .substr(2, 5);
          addUser({ variables: { email: `${localPart}@example.org` } });
        }}
      >
        Add user
      </button>
    </>
  );
};

export default Home;
