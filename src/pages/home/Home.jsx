import React from 'react'
import './Home.css'
import EventsSlider from '../../components/eventsSlider/eventsSlider'
import RecentSermons from '../../components/recentSermons/recentSermons'

export const Home = () => {
  return (
    <section className='home'>
      Home
      <div className="events-slider-container">
        <EventsSlider />
      </div>
      <div className="recent-sermons-container">
        <RecentSermons />
      </div>

    </section>
  )
}

export default Home
