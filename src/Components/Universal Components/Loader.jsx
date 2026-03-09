import React, { useEffect, useState } from 'react'
import '../../App.css'

function Loader () {
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState('We are almost there...')

  useEffect(() => {
    // Slower progress to account for Render free tier 50s wake up time
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(timer)
          return 95 // Hold at 95% until data actually loads
        }
        return prev + 1
      })
    }, 500)

    // After 5 seconds, let the user know why it's taking so long
    const msgTimer = setTimeout(() => {
      setMessage('Waking up the free server... (This takes up to 50s)')
    }, 5000)

    return () => {
      clearInterval(timer)
      clearTimeout(msgTimer)
    }
  }, [])

  return (
    <div className='loader-container'>
      <h2 className='loading-text px-4'>{message}</h2>

      <div className='progress-bar'>
        <div className='progress-fill' style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

export default Loader
