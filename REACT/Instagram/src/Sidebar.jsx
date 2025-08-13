import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

  const navigate = useNavigate();

  return (
    <div className='container d-flex flex-column justify-content-between fs-5 mx-2 mb-0'>
      <img className='logo_text' src="db\assets\Insta_text.png" />

      <div className='fw-bold'><i className="bi bi-house-door-fill fs-5" style={{ color: '#000000' }}></i>
        <span style={{ fontSize: '15px', color: '#000000' }}>Home</span></div>

      <div><i className="bi bi-search fs-5" style={{ color: '#000000' }}></i>
        <span style={{ fontSize: '15px', color: '#000000' }}>Search</span></div>

      <div><i className="bi bi-compass fs-5" style={{ color: '#000000' }}></i>
        <span style={{ fontSize: '15px', color: '#000000' }}>Explore</span></div>

      <div><i className="bi bi-film fs-5" style={{ color: '#000000' }}></i>
        <span style={{ fontSize: '15px', color: '#000000' }}>Reels</span></div>

      <div><i className="bi bi-chat-dots fs-5" style={{ color: '#000000' }}></i>
        <span style={{ fontSize: '15px', color: '#000000' }}>Messages</span></div>

      <div><i className="bi bi-heart fs-5" style={{ color: '#000000' }}></i>
        <span style={{ fontSize: '15px', color: '#000000' }}>Notifications</span></div>

      <div><i className="bi bi-plus-circle fs-5" style={{ color: '#000000' }}></i>
        <span style={{ fontSize: '15px', color: '#000000' }}>Create</span></div>

      <div><i className="bi bi-bar-chart-steps fs-5" style={{ color: '#000000' }}></i>
        <span style={{ fontSize: '15px', color: '#000000' }}>Dashboard</span></div>

      <div onClick={() => navigate('/Profile')}><img className='profile_picture' src="db\assets\john_cena.jpg" />
        <span style={{ fontSize: '15px', color: '#000000' }}>Profile</span></div>

      <div><i className="bi bi-list fs-5" style={{ color: '#000000' }}></i>
        <span style={{ fontSize: '15px', color: '#000000' }}>More</span></div>

    </div>
  )
}
//npx json-server --watch db/db.json --port 5000 --static ./db
export default Sidebar