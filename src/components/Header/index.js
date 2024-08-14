import { MdNotificationsActive } from "react-icons/md";

import './index.css'

const Header = () => {
    return(
        <nav className='nav-bar'>
            <div className='container'>
                <div className='wrapper'>
                    <div>
                        <p>Dashboard</p>
                    </div>
                    <div className='nav-content'>
                        <div>
                            <input  type='search' placeholder='Search Widgets' />
                        </div>
                        <div>
                            <button>
                                <MdNotificationsActive />
                            </button>
                        </div>
                        <div className='user-details'>
                            <img  alt='profile img' />
                            <div>
                                <h4>Neeraj Bade</h4>
                                <p>bade@neeraj</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header