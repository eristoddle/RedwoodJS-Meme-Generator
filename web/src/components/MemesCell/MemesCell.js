export const QUERY = gql`
  query MemesQuery {
    memes {
      id
      image
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ memes }) => {
  return memes.map(({ id, image }) => <img key={id} src={image} />)
}
