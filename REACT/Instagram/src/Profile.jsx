import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar';

function Profile() {

    const [Profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/profile').
            then((data) => (setProfile(data.data)))
    }, [])
    return (
        <div>
            {Profile?(<div>

                 <div><Sidebar/></div>
                <div className='d-flex justify-content-center mt-5'>
                <div><img src={Profile.profilePic} alt='Profile' className='profile rounded-circle me-5' /></div>
                <div className='d-flex'>
                    <h5 className='me-3'>{Profile.username}</h5>
                    <p className='me-3'>Edit profile</p>
                    <p className='me-3'>View archive</p></div>
                </div>

            </div>
               
            ):(
                <div className=' d-flex justify-content-center'><img className='spinner' src="http://localhost:5000/assets/Spinner-2.gif" alt="Loading" /></div>
            )}
        </div>
    )
}

export default Profile