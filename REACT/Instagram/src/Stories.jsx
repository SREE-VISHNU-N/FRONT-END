import React, { useEffect, useState } from 'react'

function Stories() {


  const [story, setStory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/story").
      then((data) => data.json()).
      then((data) => setStory(data)).
      catch((error) => console.log(error))
  }, [])


  return (
    <div className="storyWrapper">
      {story.length > 0 ? (
        story.map((story) => (
          <div className="storyContainer" key={story.id}>
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