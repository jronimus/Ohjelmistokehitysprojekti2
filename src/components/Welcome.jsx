import React from 'react'
import { useState } from 'react'
import '../styles/Welcome.css';
import person from '../Images/Icons/person.png'
import settings from '../Images/Icons/Settings.png'
import bikes from '../Images/Icons/Bikes.png'
import districts from '../Images/Icons/Districts.png'
import events from '../Images/Icons/Events.png'
import weather from '../Images/Icons/Weather.png'
import Login from './LogIn';
import transit from '../Images/Icons/Transit.png'

const Welcome = () => {

    /**
     * state for view: home, login, register
     * return conditionally the View
        based on the state value
        change state when the user clicks login
        return back if the user clicks close

        // return view === 'home' 
     */
    const [, ] = useState(null)


    

    
    
    return (
        <div className=" welcome-box container-grid">
           <div className='box item1'>
              <div><img src={person} alt='person icon' /></div>
              <p>Welcome! To access personalized content, please
              <span className='bold' onClick={()=> <Login />}> log in</span> or <span className='bold'>register</span> for un account</p>
           </div>
           <div className='box item2'>
               <img src={events} alt='events icon' />
           </div>
           <div className='box item3'>
               <img src={transit} alt='transit icon' />
           </div>
           <div className='box item4'>
                <img src={weather} alt='weather icon' />
                {/* <h3>Weather</h3>
                <div>temperature</div>
                <div>sunny</div>
                <div>city</div> */}
           </div>    
           <div className='box item5'>
               <img src={districts} alt='districts icon' />
           </div>
           <div className='box item6'>
                <img src={bikes} alt='bikes icon' />
           </div>
           <div className='box item7'>
                <img src={settings} alt='settings icon' />
           </div>              
        </div>

    )
    
}

export default Welcome;    