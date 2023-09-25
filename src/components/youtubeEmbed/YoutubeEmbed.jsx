import React, { useState, useEffect } from 'react'
import './YoutubeEmbed.css'

const YoutubeEmbed = ({ embedId }) => {
  const [loading, setLoading] = useState(true);
  const [videoTitle, setVideoTitle] = useState(null)
  useEffect(() => {
    const embedUrl = `https://www.youtube.com/embed/${embedId}`;

    const videoId = embedUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

    if (videoId) {
      const apiUrl = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId[1]}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          setVideoTitle(data.title)
        })
        .catch(error => {
          console.error('Error fetching video data:', error);
        });
    }
  });
  return (
    <>
      <div className="video-responsive">
        {loading &&
          <div className="spinner" style={{
            display: loading ? "block" : "none",
          }} >
            <div className="simple-spinner">
              <span></span>
            </div>
          </div>}
        <iframe className='recent-sermon-embed'
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          style={{
            display: loading ? "none" : "block",
          }}
          onLoad={(e) => { setLoading(false) }}
        />
      </div>
      <div className="recent-sermon-info">
        <h4>{videoTitle}</h4>
      </div>
    </>
  )
}

export default YoutubeEmbed
