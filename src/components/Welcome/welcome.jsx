import React from 'react'
import './welcome.css'
import ImageWithLoader from '../Image/image'
import PHCText from '../../assets/logos/phcText.png'

const Welcome = () => {
  return (
    <>
      <div className='we-are'>
        <div className="welcome-message">
          {/* <h2>Welcome! We Are</h2> */}
          <ImageWithLoader nme="" src={PHCText} />
          {/* <h1>Potter's House Wandsworth</h1> */}
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ut nesciunt, sequi molestiae aut voluptate deserunt, est sint, libero repellendus ipsam assumenda unde nihil quo voluptatibus quod accusantium eaque. Inventore.</p> */}
        </div>
        <div className="church-service-info">
          <div className="location">
            <h2>Location:</h2>
            <p>Transformation House, 66 St John's Hill, London, SW11 1AD</p>

          </div>
          <div className="time">
            <h2>Service Time:</h2>
            <p>Wednesdays: 7pm</p>
            <p>Sundays: 3pm</p>
          </div>
        </div>

      </div>
      <div className="welcome-gallery">
        <div className="row">
          <ImageWithLoader nme="p-1" src='https://images.squarespace-cdn.com/content/v1/5d0b4af48825300001f6e9c6/1585695487747-A7RCU5VEZTT5S81JZ3KZ/HERO+BANNERS.jpg?format=1000w' />
          <ImageWithLoader nme="p-2" src='https://plus.unsplash.com/premium_photo-1677787955289-6fd8405bb1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNocmlzdGlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <ImageWithLoader src='https://images.unsplash.com/photo-1570884148924-54f2e9def21c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNocmlzdGlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />

        </div>
        <div className="row">
          <ImageWithLoader src='https://images.unsplash.com/photo-1616548321600-aaab929899b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGNocmlzdGlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <ImageWithLoader nme="p-2" src='https://images.unsplash.com/photo-1593193583588-66f1dcc0625b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNocmlzdGlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <ImageWithLoader src='https://images.unsplash.com/photo-1620495087695-2c21f0b561ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNocmlzdGlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        </div>
        <div className="row">
          <ImageWithLoader nme="p-3" src='https://images.squarespace-cdn.com/content/v1/5d0b4af48825300001f6e9c6/1585695487747-A7RCU5VEZTT5S81JZ3KZ/HERO+BANNERS.jpg?format=1000w' />
          <ImageWithLoader nme="p-2" src='https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNocmlzdGlhbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' />
          <ImageWithLoader src='https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hyaXN0aWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' />
        </div>
      </div >

      {/* <div class="three-images-wrapper">

        <div class="three-images">
          <div class="featured-image-outer">
            <div class="featured-image-inner"
              style={{ backgroundImage: "url('https://cloud.githubusercontent.com/assets/6893715/21904006/e307032c-d8b6-11e6-9e4a-52dccfedf8a5.jpg')" }}>

            </div>
          </div>

          <div class="two-images">
            <div class="two-images-outer">
              <div class="two-images-inner"
                style={{ backgroundImage: "url('https://cloud.githubusercontent.com/assets/6893715/21904091/52eb581e-d8b7-11e6-9eff-a2d40c3b4304.jpg')" }}>
              </div>
            </div>

            <div class="two-images-outer">
              <div class="two-images-inner"
                style={{ backgroundImage: "url('https://cloud.githubusercontent.com/assets/6893715/21904081/479edcf6-d8b7-11e6-9c83-b01658fbb473.jpg')" }}>
              </div>
            </div>
          </div>

        </div>
      </div> */}
    </>
  )
}

export default Welcome
