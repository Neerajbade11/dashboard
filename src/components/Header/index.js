import React,{useState} from 'react';
import { useEcommerce } from '../EcommerceContext';
import { useLocation } from 'react-router-dom';
import { MdNotificationsActive } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import './index.css';


const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    
    const {searchInputWidget} = useEcommerce()
    const location = useLocation()

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    const handleKey = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        searchInputWidget(value);
    }
    const getTitle = () => {
        switch (location.pathname) {
            case '/Dashboard':
                return '> Dashboard'
            default:
                return ''
        }
    }

    

    return (
        <nav className='nav-bar'>
            <div className='container'>
                <div className='nav-wrapper'>
                    <div className='nav-title'>
                        <p>Home <span className='navigation-title hide-btn' >{`${getTitle()}`}</span></p>
                    </div>
                    <div className='nav-content'>
                        <div className="search-bar-container">
                            <FaSearch className='search-icon' />
                            <input className="search-bar" onChange={(e) => setSearchInput(e.target.value)} onKeyDown={handleKey} value={searchInput}  type='search' placeholder='Search Widgets' />
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
