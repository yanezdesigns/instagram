import React from 'react';
import { FaUser, FaCheck } from 'react-icons/fa';
import './RightSidebar.css';

const RightSidebar = () => {
  const suggestions = [
    {
      username: 'maxvelichkin',
      description: 'Followed by taisalton + 8 more',
      isVerified: false,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    },
    {
      username: 'deborah_beachbum',
      description: 'Suggested for you',
      isVerified: false,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face'
    },
    {
      username: 'unotennis',
      description: 'Followed by taisalton + 8 more',
      isVerified: false,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face'
    },
    {
      username: 'wicked_wahineenee',
      description: 'Suggested for you',
      isVerified: false,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
    },
    {
      username: 'lat_tennisacademy_f...',
      description: 'Suggested for you',
      isVerified: true,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
    }
  ];

  const footerLinks = [
    'About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 
    'Consumer Health Privacy', 'Terms', 'Locations', 'Language', 'Meta Verified'
  ];

  return (
    <div className="right-sidebar">
      {/* Current User */}
      <div className="current-user">
        <div className="user-profile">
          <div className="user-avatar" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face)' }}>
          </div>
          <div className="user-info">
            <span className="username">pauldyanez</span>
            <span className="full-name">Paul Yanez</span>
          </div>
        </div>
        <button className="switch-btn">Switch</button>
      </div>

      {/* Suggestions */}
      <div className="suggestions-section">
        <div className="suggestions-header">
          <span className="suggestions-title">Suggested for you</span>
          <button className="see-all-btn">See All</button>
        </div>
        
        <div className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="suggestion-item">
              <div className="suggestion-user">
                <div className="suggestion-avatar" style={{ backgroundImage: `url(${suggestion.image})` }}></div>
                <div className="suggestion-info">
                  <div className="suggestion-username">
                    {suggestion.username}
                    {suggestion.isVerified && <FaCheck className="verified-badge" />}
                  </div>
                  <div className="suggestion-description">{suggestion.description}</div>
                </div>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        {footerLinks.map((link, index) => (
          <React.Fragment key={index}>
            <button className="footer-link">{link}</button>
            {index < footerLinks.length - 1 && <span className="link-separator">·</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="copyright">
        © 2025 INSTAGRAM FROM META
      </div>
    </div>
  );
};

export default RightSidebar; 