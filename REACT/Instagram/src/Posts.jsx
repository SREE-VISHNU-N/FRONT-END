import React, { useEffect, useState } from 'react'

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts").
      then((data) => data.json()).
      then((data) => setPosts(data)).
      catch((error) => console.log(error))
  }, [])


  return (
    <div>

      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div className='feedContainer' key={post.id}>

              <div className='dpBack d-flex'>
                <img className='dp rounded-circle' src={post.profilePic} alt="ProfilePic" />
                <h5 className='user'>{post.username} </h5>
              </div>

              <div>   <img className='image' src={post.image} alt="" /><i className="more bi bi-three-dots"></i></div>

              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
                <i className="book bi bi-bookmark"></i>
              </div>

              <div>
                <b className='likes'>{post.likes}likes</b>
                <p className='caption'>{post.caption}</p>
                <hr className='hr' />

              </div>

            </div>
          ))}
        </div>
      ) : (
        <div>Loading Posts</div>
      )}

    </div>

  )
}

export default Posts