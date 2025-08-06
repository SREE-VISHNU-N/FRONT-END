import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

  const navigate=useNavigate();

  return (
    <div className='container d-flex flex-column justify-content-between fs-6 mx-2 mb-0'>
      <img className='logo_text' src="db\assets\Insta_text.png" />
      <div className='fw-bold'><i className="bi bi-house-door-fill fs-5"></i>Home</div>
      <div><i className="bi bi-search fs-5"></i>Search</div>
      <div><i className="bi bi-compass fs-5"></i>Explore</div>
      <div><i className="bi bi-film fs-5"></i>Reels</div>
      <div><i className="bi bi-chat-dots fs-5"></i>Messages</div>
      <div><i className="bi bi-heart fs-5"></i>Notifications</div>
      <div><i className="bi bi-plus-circle fs-5"></i>Create</div>
      <div><i className="bi bi-bar-chart-steps fs-5"></i>Dashboard</div>
      <div onClick={()=>navigate('/Profile')}><img className='profile_picture' src="db\assets\john_cena.jpg" />Profile</div>
      <div><i className="bi bi-list fs-5"></i>More</div>
    </div>
  )
}
//npx json-server --watch db/db.json --port 5000 --static ./db
export default Sidebar