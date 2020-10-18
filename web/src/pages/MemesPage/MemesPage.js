import MemeLayout from 'src/layouts/MemeLayout'
import MemesCell from 'src/components/MemesCell'

const MemesPage = () => {
  return (
    <MemeLayout>
      <h1>All Memes</h1>
      <MemesCell />
    </MemeLayout>
  )
}

export default MemesPage
