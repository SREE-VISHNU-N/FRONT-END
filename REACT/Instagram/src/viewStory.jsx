import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function viewStory() {
    const { id } = useParams()
    const [story, setStory] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/story/${id}`).
            then((data) => (data.json())).
            then((data) => (setStory(data))).
            catch((error) => (console.log(error)))
    }, []);


    return (
        <div>
            {story ? <div className='d-flex justify-content-center'>
                <img className='vh-100' src={story.image} alt="" />

            </div>
                : <div className=' d-flex justify-content-center'><img className='spinner' src="http://localhost:5000/assets/Spinner-2.gif" alt="Loading" /></div>}
        </div>
    )
}

export default viewStory