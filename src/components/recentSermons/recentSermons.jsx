import React, { useEffect, useState } from 'react'
import './recentSermons.css'
import { DateConversion } from '../misc'
import YoutubeEmbed from '../youtubeEmbed/YoutubeEmbed'

const RecentSermons = () => {
    const [recentSermons, setRecentSermons] = useState(null)
    useEffect(() => {
        fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyArj23z1nbK41d_EZ6Y73hAfqBp4HllesI&channelId=UCj8TStH40-LzKKu4xq5SsCg&part=snippet&order=date&maxResults=5")
            .then(response => response.json())
            .then(response => { if (response.items != null) setRecentSermons(response.items); })
            .catch(error => {
                console.error('Error fetching video data:', error);
            })
        // fetch("https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyArj23z1nbK41d_EZ6Y73hAfqBp4HllesI&channelId=UCj8TStH40-LzKKu4xq5SsCg&part=snippet,id&order=date&eventtype=completed&maxResults=50")
        //     .then(response => response.json())
        //     .then(response => console.log(response))
    }, [recentSermons])


    return (
        <div className='recent-sermons'>
            <h2 className="title">Recent Sermons</h2>
            <div className="recent-sermon-videos">
                {recentSermons != null ? (
                    recentSermons.map(sermon => {
                        console.log(sermon)
                        return <article className='recent-sermon' key={sermon.id.videoId}>
                            <YoutubeEmbed embedId={sermon.id.videoId} />
                            <div className="recent-sermon-info">
                                <h5>{DateConversion(sermon.snippet.publishTime)}</h5>
                            </div>
                        </article>
                    })
                ) : (
                    <>
                        <article className='recent-sermon' key="Nx11SV34xf4">
                            <YoutubeEmbed embedId="Nx11SV34xf4" />
                        </article>
                        <article className='recent-sermon' key="Nx11SV34xf4">
                            <YoutubeEmbed embedId="lOOrGfnz0fM" />
                        </article>
                        <article className='recent-sermon' key="Nx11SV34xf4">
                            <YoutubeEmbed embedId="5fwie0UYano" />
                        </article>
                        <article className='recent-sermon' key="Nx11SV34xf4">
                            <YoutubeEmbed embedId="IX7J_9rtjEg" />
                        </article>
                        <article className='recent-sermon' key="Nx11SV34xf4">
                            <YoutubeEmbed embedId="Hnq-Km7bPsQ" />
                        </article>
                        <article className='recent-sermon' key="Nx11SV34xf4">
                            <YoutubeEmbed embedId="lOOrGfnz0fM" />
                        </article>
                    </>
                )
                }
            </div>
        </div>
    )
}

export default RecentSermons