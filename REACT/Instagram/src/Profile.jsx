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
            {Profile ? (<div>

                <div><Sidebar /></div>
                <div className='d-flex justify-content-center '>
                    <div className='mt-5'><img src={Profile.profilePic} alt='Profile' className='profile rounded-circle' /></div>
                    <div className='profileContent d-flex'>
                        <div><p className='me-3 fw-normal' style={{fontSize:'18px'}}>{Profile.username}</p></div>
                        <div><p className=' grayBox me-3 fw-medium' style={{fontSize:'13px'}}>Edit profile</p></div>
                            <div><p className=' grayBox me-3 fw-medium' style={{fontSize:'13px'}}>View archive</p></div>
                        <div><i class="bi bi-gear-wide"></i></div>
                    </div>
                </div>

                <div className='profileContent2 d-flex justify-content-center'>

                    <div className='align-items-center'>
                        <div className='d-flex mt-3 mb-1'>
                            <p className='fw-semibold me-1' style={{fontSize:'14px'}}>{Profile.post}</p><span className='me-4' style={{fontSize:'14px', color:"gray"}}>posts</span>
                            <p className='fw-semibold me-1' style={{fontSize:'14px'}}>{Profile.followers}</p><span className='me-4' style={{fontSize:'14px', color:"gray"}}>followers</span>
                            <p className='fw-semibold me-1' style={{fontSize:'14px'}}>{Profile.following}</p><span className='me-4' style={{fontSize:'14px', color:"gray"}}>following</span>
                        </div>
                        <div>
                            <div><p className='m-0 fw-medium' style={{fontSize:'15px'}}>John Cena </p></div>
                            <div><p className='m-0' style={{fontSize:'14px'}}>🏆The Last Real Champ </p></div>
                            <div><p className='m-0' style={{fontSize:'14px'}}>🔹17-Time World Champion</p></div>
                            <div><p className='m-0' style={{fontSize:'14px'}}>🔥Hustle. Loyalty. Respect.</p></div>
                            <div><p className='m-0' style={{fontSize:'14px'}}>🎤WWE Icon | 🎬Hollywood Star</p></div>
                            <div><p className='m-0' style={{fontSize:'14px'}}>👋"You Can’t See Me" - But I See Greatness</p></div>
                        </div>

                    </div>


                </div>


            </div>

            ) : (
                <div className=' d-flex justify-content-center'><img className='spinner' src="http://localhost:5000/assets/Spinner-2.gif" alt="Loading" /></div>
            )}
        </div>
    )
}

export default Profile