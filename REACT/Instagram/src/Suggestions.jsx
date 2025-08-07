import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [Suggestions, setSuggestions] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/profile").
      then((data) => (data.json())).
      then((data) => (setProfile(data))).
      catch((error) => (console.log(error)))

    fetch("http://localhost:5000/suggestions").
      then((data) => (data.json())).
      then((data) => (setSuggestions(data))).
      catch((error) => (console.log(error)))

  }, [])

  return (



    <div>
  {profile ? (
    <div className='d-flex justify-content-between mt-4 ms-2 mb-3'>
      <div className='d-flex' onClick={()=> navigate('/Profile')}>
        <img className='suggesDp rounded-circle ms-5' src={profile.profilePic} alt="ProfilePic" />
        <h5 className='user'>{profile.username}  <i className="bi bi-patch-check-fill text-primary ms-1"></i></h5>
      </div>
      <div>
        <p className=' switch me-5'>Switch</p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  )}

  <div className='d-flex justify-content-between ms-2' >
    <p className='forYou ms-5'>Suggested for you</p>
    <p className='seeAll me-5'>See All</p>
  </div>

  {Suggestions.map((post) => (
    <div key={post.id} className='suggesContainer d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center ms-2'>
        <img className='suggesDp rounded-circle ms-5 mb-3' src={post.profilePic} alt="ProfilePic" />
        <h5 className='suggesUser ms-2'>{post.username}<i className="bi bi-patch-check-fill text-primary ms-1"></i></h5>
      </div>
      <div>
        <p className='follow me-5'>Follow</p>
      </div>
    </div>
  ))}
</div>



  )
}

export default Suggestions