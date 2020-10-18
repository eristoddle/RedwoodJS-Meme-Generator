import React, { useState, useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'
import html2canvas from 'html2canvas'
import MemeLayout from 'src/layouts/MemeLayout'
import { useMutation } from '@redwoodjs/web'

const CREATE_MEME = gql`
  mutation CreateMemeMutation($input: CreateMemeInput!) {
    createMeme(input: $input) {
      id
    }
  }
`
const HomePage = () => {
  const { logIn, isAuthenticated, currentUser } = useAuth()
  const [image, setImage] = useState([])
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [displaySuccess, setDisplaySuccess] = useState(false)
  const [create] = useMutation(CREATE_MEME)

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((response) => {
        const rand = Math.floor(Math.random() * 100 + 1)
        setImage(response.data.memes[rand])
      })
  }, [])

  const generateImage = (e) => {
    e.preventDefault()
    if (!isAuthenticated) {
      logIn()
    } else {
      const element = document.getElementById('meme')
      html2canvas(element, { allowTaint: true, useCORS: true })
        .then((canvas) => {
          const base64Image = canvas.toDataURL()
          const formData = new FormData()
          formData.append('file', base64Image)
          formData.append('upload_preset', 'smemytto')
          return fetch(
            `https://api.cloudinary.com/v1_1/dxynccz7l/image/upload`,
            {
              method: 'POST',
              body: formData,
            }
          )
        })
        .then((response) => response.json())
        .then((data) => {
          const { email } = currentUser
          const { url } = data
          const input = {
            userId: email,
            image: url,
          }
          create({ variables: { input } })
          setDisplaySuccess(true)
          setTimeout(() => {
            setDisplaySuccess(false)
          }, 3000)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }

  return (
    <MemeLayout>
      <h1>Meme Generator</h1>
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
          <button onClick={generateImage}>Generate</button>
        </form>

        <div style={{ display: displaySuccess ? 'block' : 'none' }}>
          Meme Created!
        </div>

        <div className="meme" id="meme">
          <img src={image.url} alt="" />
          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2>
        </div>
      </div>
    </MemeLayout>
  )
}

export default HomePage
