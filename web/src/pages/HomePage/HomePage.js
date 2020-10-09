import React, { useState, useEffect } from 'react'
import html2canvas from 'html2canvas'
import MemeLayout from 'src/layouts/MemeLayout'

const generateImage = (e) => {
  e.preventDefault()
  const element = document.getElementById('meme')
  html2canvas(element).then(function (canvas) {
    const myImage = canvas.toDataURL()
    console.log(myImage)
  })
}

const HomePage = () => {
  const [image, setImage] = useState([])
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((response) => {
        const rand = Math.floor(Math.random() * 100 + 1)
        setImage(response.data.memes[rand])
      })
  }, [])

  console.log(topText, bottomText, image)

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
