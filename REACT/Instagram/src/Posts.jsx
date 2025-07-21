import React, { useEffect, useState } from 'react'

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts").
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
                <h5 className=' user d-flex'>{post.username}<i className="tick bi bi-patch-check-fill text-primary ms-1"></i></h5>
              </div>

              <div>   <img className='image' src={post.image} alt="" /><i className="more bi bi-three-dots"></i></div>

              <div>
                <i className="bi bi-heart fs-5"></i>
                <i className="bi bi-chat fs-5"></i>
                <i className="bi bi-send fs-5"></i>
                <i className="book bi bi-bookmark fs-5"></i>
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
        <div className=' d-flex justify-content-center'><img className='spinner' src="http://localhost:5000/assets/Spinner-2.gif" alt="Loading" /></div>
      )}

    </div>

  )
}

export default Posts