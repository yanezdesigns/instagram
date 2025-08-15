import React from 'react';
import instagramLogo from '../instagram.svg';
import instagramSmallLogo from '../icons/instagram-sm.svg';
import homeIcon from '../icons/home.svg';
import searchIcon from '../icons/search.svg';
import exploreIcon from '../icons/explore.svg';
import reelsIcon from '../icons/reels.svg';
import messagesIcon from '../icons/messages.svg';
import notificationsIcon from '../icons/notifications.svg';
import createIcon from '../icons/create.svg';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={instagramLogo} alt="Instagram" className="instagram-logo" />
        <img src={instagramSmallLogo} alt="Instagram" className="instagram-small-logo" />
      </div>
      
      <nav className="nav-menu">
        <div className="nav-item">
          <img src={homeIcon} alt="Home" className="nav-icon" />
          <span>Home</span>
        </div>
        
        <div className="nav-item">
          <img src={searchIcon} alt="Search" className="nav-icon" />
          <span>Search</span>
        </div>
        
        <div className="nav-item">
          <img src={exploreIcon} alt="Explore" className="nav-icon" />
          <span>Explore</span>
        </div>
        
        <div className="nav-item">
          <img src={reelsIcon} alt="Reels" className="nav-icon" />
          <span>Reels</span>
        </div>
        
        <div className="nav-item">
          <div className="nav-icon-container">
            <img src={messagesIcon} alt="Messages" className="nav-icon" />
            <div className="notification-badge">1</div>
          </div>
          <span>Messages</span>
        </div>
        
        <div className="nav-item">
          <div className="nav-icon-container">
            <img src={notificationsIcon} alt="Notifications" className="nav-icon" />
            <div className="notification-dot"></div>
          </div>
          <span>Notifications</span>
        </div>
        
        <div className="nav-item">
          <img src={createIcon} alt="Create" className="nav-icon" />
          <span>Create</span>
        </div>
        
        <div className="nav-item">
          <div className="profile-pic" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face)' }}>
          </div>
          <span>Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar; 