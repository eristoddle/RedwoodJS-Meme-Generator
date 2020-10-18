export const schema = gql`
  type Meme {
    id: Int!
    userId: String!
    image: String!
    createdAt: DateTime!
  }

  type Query {
    memes: [Meme!]!
  }

  input CreateMemeInput {
    userId: String!
    image: String!
  }

  input UpdateMemeInput {
    userId: String
    image: String
  }

  type Mutation {
    createMeme(input: CreateMemeInput!): Meme
  }
`
