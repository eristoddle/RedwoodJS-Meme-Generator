import { db } from 'src/lib/db'

export const memes = () => {
  return db.meme.findMany()
}

export const createMeme = ({ input }) => {
  return db.meme.create({ data: input })
}
