import React, { useEffect, useState } from 'react'

function Stories() {


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts").
      then((data) => data.json()).
      then((data) => setPosts(data)).
      catch((error) => console.log(error))
  }, [])


  return (
    <div className="storyWrapper">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="storyContainer" key={post.id}>
            <div className="storyDpBack">
              <img className="storyDp rounded-circle" src={post.profilePic} alt="ProfilePic" />
              <h5 className="storyUser">{post.username}</h5>
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