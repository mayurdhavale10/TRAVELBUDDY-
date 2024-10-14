import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="home-page">
      <div className="welcome-msg">
        <h1>Welcome to TravelBuddy 👒</h1>
        <p>Plan your next adventure with friends!</p>
      </div>

      <div className="about-section">
        <h2>What's TravelBuddy?</h2>
        <p>
          We help you organize trips, keep track of your travel stories, 
          and stay connected with your travel buddies. It's like a 
          social network, but for travelers!
        </p>
      </div>

      <div className="cta-button">
        <Link to="/plan-trip" className="btn">Start Your Journey</Link>
      </div>
    </div>
  )
}

export default HomePage