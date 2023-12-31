import React from 'react'
import './welcome.css'
import PHCText from '../../assets/logos/phcText.png'

const Welcome = () => {
  return (
    <>
      <div className='we-are'>
        <div className="welcome-message">
          <img src={PHCText} alt='' />
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
          <img className="p-1" src='https://images.squarespace-cdn.com/content/v1/5d0b4af48825300001f6e9c6/1585695487747-A7RCU5VEZTT5S81JZ3KZ/HERO+BANNERS.jpg?format=1000w' />
          <img className="p-2" src='https://plus.unsplash.com/premium_photo-1677787955289-6fd8405bb1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNocmlzdGlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <img src='https://images.unsplash.com/photo-1570884148924-54f2e9def21c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNocmlzdGlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />

        </div>
        <div className="row">
          <img src='https://images.unsplash.com/photo-1616548321600-aaab929899b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGNocmlzdGlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <img className="p-2" src='https://images.unsplash.com/photo-1593193583588-66f1dcc0625b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNocmlzdGlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <img src='https://images.unsplash.com/photo-1620495087695-2c21f0b561ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNocmlzdGlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        </div>
        <div className="row">
          <img className="p-3" src='https://images.squarespace-cdn.com/content/v1/5d0b4af48825300001f6e9c6/1585695487747-A7RCU5VEZTT5S81JZ3KZ/HERO+BANNERS.jpg?format=1000w' />
          <img className="p-2" src='https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNocmlzdGlhbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' />
          <img src='https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hyaXN0aWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' />
        </div>
      </div >
    </>
  )
}

export default Welcome
