import React,{useState} from 'react';
import { MdNotificationsActive } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import './index.css';


const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <nav className='nav-bar'>
            <div className='container'>
                <div className='nav-wrapper'>
                    <div className='nav-title'>
                        <h1>Dashboard</h1>
                    </div>
                    <div className='nav-content'>
                        <div className="search-bar-container">
                            <FaSearch className='search-icon' />
                            <input className="search-bar" type='search' placeholder='Search Widgets' />
                        </div>
                        <div className='notification-btn'>
                            <button className="notification-button">
                                <MdNotificationsActive />
                            </button>
                        </div>
                        <div className='user-info-container'>
                            <div onClick={toggleMenu} className="profile-pic">
                                <p>N</p>
                            </div>
                            <div  className="user-info" onClick={toggleMenu}>
                                <h4>Neeraj Bade</h4>
                                <p>bade@neeraj</p>
                            </div>
                            {menuVisible && (
                                <div className="user-menu">
                                    <ul>
                                        <li>My Account</li>
                                        <li>Reset Password</li>
                                        <li>Logout</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
