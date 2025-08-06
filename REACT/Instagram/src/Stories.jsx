import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {


  const [story, setStory] = useState([]);
  const navigate = useNavigate();
  let total = 0;

  useEffect(() => {
    fetch("http://localhost:5000/story").
      then((data) => data.json()).
      then((data) => setStory(data)).
      catch((error) => console.log(error))
  }, [])


  return (
    <div className="storyWrapper">
      <div className='d-none'>{total = story.length}</div>  {/* <-- Assigning value of total */}
      {story.length > 0 ? (
        story.map((story) => (
          <div className="storyContainer" key={story.id} onClick={() => navigate(`/story/${story.id}/${total}`)}>
            <div className="storyDpBack">
              <img className="storyDp rounded-circle" src={story.profilePic} alt="ProfilePic" />
              <h5 className="storyUser">{story.username}</h5>
            </div>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>

  );
}

export default Stories