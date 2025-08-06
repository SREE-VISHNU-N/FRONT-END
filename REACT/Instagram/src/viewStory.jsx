import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function viewStory() {
    const { id, total } = useParams()
    const [story, setStory] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/story/${id}`).
            then((data) => (data.json())).
            then((data) => (setStory(data))).
            catch((error) => (console.log(error)))
    }, [id]);


    if (id > total || id<=0) {
        navigate('/');
    }

    return (
        <div>
            {story ? <div className='d-flex justify-content-center align-items-center'>
                <Link to={`http://localhost:5173/story/${Number(id) - 1}/${total}`} ><i class="arrow bi bi-arrow-left-circle-fill me-4 "></i></Link>
                <img className='vh-100' src={story.image} alt="" />
                <Link to={`http://localhost:5173/story/${Number(id) + 1}/${total}`} ><i class="arrow bi bi-arrow-right-circle-fill ms-4"></i></Link>

            </div>
                : <div className=' d-flex justify-content-center'><img className='spinner' src="http://localhost:5000/assets/Spinner-2.gif" alt="Loading" /></div>}
        </div>
    )
}

export default viewStory