import React from 'react'
import './Home.css'
import EventsSlider from '../../components/eventsSlider/eventsSlider'
import RecentSermons from '../../components/recentSermons/recentSermons'
import ConnectGroups from '../../components/connectGroup/connectGroup'
import Welcome from '../../components/Welcome/welcome'
import ChurchValues from '../../components/churchValues/churchValues'
import Contact from '../../components/Contact/contact'
import SocialMedia from '../../components/socialMedia/SocialMedia'

export const Home = () => {
  return (
    <section id='home'>
      <div className="home-container">
        <div className="welcome-container">
          <Welcome />
        </div>
        <div className="church-values-container">
          <h5>we aim to</h5>
          <h2>Our Mission</h2>
          <div className="church-values">
            <ChurchValues value="Reach The Lost" src="https://cdn.churchleaders.com/wp-content/uploads/files/article_images/11.16.ReachingtheReceptive_877419044.jpg" />
            <ChurchValues value="Make Disciples" src="https://www.heroesbibletrivia.org/wp-content/uploads/2022/01/judas-1-1-1024x576.jpg" />
            <ChurchValues value="Plant Churches" src="https://phcwandsworth.files.wordpress.com/2014/05/phc-321.jpg?w=640" />
          </div>
        </div>
        <div className="recent-sermons-container">
          <RecentSermons />
        </div>
        <div className="events-slider-container">
          <h2>Upcoming Events</h2>
          <EventsSlider />
        </div>
        <div className="contact-us-container">
          <Contact />
        </div>
        <div className="social-media-container">
          <SocialMedia />
        </div>
        {/* <div className="home-interactions-container">
          <div className="connect-group-container">
            <ConnectGroups />
          </div>
          <div className="connect-group-container">
            <ConnectGroups />
          </div>
        </div> */}

      </div>
      {/* <div className="home-posts-container">
        Home
      </div> */}
    </section>
  )
}

export default Home
