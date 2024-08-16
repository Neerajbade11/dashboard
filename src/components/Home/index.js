import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Home = () => {
  return (
    <section className='home-section'>
        
            <div className='home-content'>
                <Link to='/Dashboard' ><button type='button' className='dashboard-btn' > Go To Dashboard</button></Link>
            </div>
        
    </section>
  )
}

export default Home
