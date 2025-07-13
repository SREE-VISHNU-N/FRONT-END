import React from 'react'

function Sidebar() {
  return (
    <div className=' container d-flex flex-column justify-content-between fs-6 mx-2 mb-0'>
      <img className='logo_text' src="src\assets\Insta_text.png" alt="" />
      <div className='fw-bold'><i class="bi bi-house-door-fill fs-5"></i>Home</div>
      <div><i class="bi bi-search fs-5"></i>Search</div>
      <div><i class="bi bi-compass fs-5"></i>Explore</div>
      <div><i class="bi bi-film fs-5"></i>Reels</div>
      <div><i class="bi bi-chat-dots fs-5"></i>Messages</div>
      <div><i class="bi bi-heart fs-5"></i>Notifications</div>
      <div><i class="bi bi-plus-circle fs-5"></i>Create</div>
      <div><i class="bi bi-bar-chart-steps fs-5"></i>Dashboard</div>
      <div><img className='profile_picture' src="src\assets\Profile.jpg" alt="" />Profile</div>
      <div><i class="bi bi-list fs-5"></i>More</div>
    </div>
  )
}

export default Sidebar