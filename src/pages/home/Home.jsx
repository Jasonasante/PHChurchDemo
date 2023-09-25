import React from 'react'
import './Home.css'
import EventsSlider from '../../components/eventsSlider/eventsSlider'
import RecentSermons from '../../components/recentSermons/recentSermons'
// import ConnectGroups from '../../components/connectGroup/connectGroup'
import Welcome from '../../components/Welcome/welcome'
import ChurchValues from '../../components/churchValues/churchValues'
import Contact from '../../components/Contact/contact'
import SocialMedia from '../../components/socialMedia/SocialMedia'
import JoinCommunity from '../../components/JoinCommunity/JoinCommunity'
import { NavLink} from 'react-router-dom'

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
          <p>The Potter's House Church Wandsworth is a Bible-based, Spirit-filled, Non-denominational church passionate about spreading the Gospel of Jesus Christ. We are a dynamic and diverse community of people who want to live our lives in the way that Jesus did and that is by: Loving God, Loving People and Serving Others.</p>
          <div className="church-values">
            <ChurchValues value="Reach The Lost" src="https://cdn.churchleaders.com/wp-content/uploads/files/article_images/11.16.ReachingtheReceptive_877419044.jpg" />
            <ChurchValues value="Make Disciples" src="https://www.heroesbibletrivia.org/wp-content/uploads/2022/01/judas-1-1-1024x576.jpg" />
            <ChurchValues value="Plant Churches" src="https://phcwandsworth.files.wordpress.com/2014/05/phc-321.jpg?w=640" />
          </div>
          <NavLink to="/about" className="btn-primary"> Read More About Us...</NavLink>
        </div>
        <div className="recent-sermons-container">
          <RecentSermons />
        </div>
        <div className="events-slider-container">
          <h2>Upcoming Events</h2>
          <EventsSlider />
        </div>
        <div className="join-community-container">
          {/* <Welcome /> */}
          <JoinCommunity main={{
            header: "Join Our Community", text: `
Fellowship is integral in a Christian lifestyle, as it provides a vital platform for believers to support and encourage one another, just as iron sharpens iron (Proverbs 27:17). This communal interaction fosters spiritual growth, deepens understanding of God's word, and strengthens individual faith, reinforcing the sense of belonging within the larger body of Christ.`, src: ""
          }} part1={{ text: "", src: "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZW5kcyUyMHRhbGtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" }} part2={{ text: "", src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZW5kcyUyMHRhbGtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" }} redirect={true} />
        </div>
        <div className="read-testimonies-container">
          <h5>Jesus Changed My Life</h5>
          <h2>Testimonies</h2>
          <p>Explore our Christian Testimonial Page by clicking the button below to read firsthand accounts of faith journeys and encounters with the transformative power of Christ. These inspiring stories serve as a testament to God's love, grace, and redemption in our lives, motivating us to walk in faith and trust in His divine plan.</p>
        <NavLink to="/testimonies" className="btn-primary"> Read More...</NavLink>
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
    </section>
  )
}

export default Home
