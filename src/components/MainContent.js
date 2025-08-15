import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaEllipsisH, FaChevronRight as FaArrowRight, FaPlus } from 'react-icons/fa';
import './MainContent.css';

// Import profile images
import profile1 from '../profiles/1.png';
import profile2 from '../profiles/2.png';
import profile3 from '../profiles/3.png';
import profile4 from '../profiles/4.png';
import profile5 from '../profiles/5.png';
import profile6 from '../profiles/6.png';

// Import post action icons
import heartIcon from '../icons/post-icons/heart.svg';
import commentIcon from '../icons/post-icons/comment.svg';
import shareIcon from '../icons/post-icons/share.svg';
import planeIcon from '../icons/post-icons/plane.svg';

const MainContent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [slideDirection, setSlideDirection] = useState('');

  // Minimum swipe distance (in px)
  const minSwipeDistance = 150;

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setSlideDirection('slide-left');
      setTimeout(() => {
        setCurrentImageIndex(prev => prev - 1);
        setSlideDirection('');
      }, 300);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < 1) { // 1 because we have 2 images (0 and 1)
      setSlideDirection('slide-right');
      setTimeout(() => {
        setCurrentImageIndex(prev => prev + 1);
        setSlideDirection('');
      }, 300);
    }
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentImageIndex < 1) {
      handleNextImage();
    }
    if (isRightSwipe && currentImageIndex > 0) {
      handlePrevImage();
    }
  };

  const stories = [
    { 
      username: 'mofongor...', 
      hasStory: true,
      image: profile1
    },
    { 
      username: 'chiara_ma...', 
      hasStory: true,
      image: profile2
    },
    { 
      username: 'polymodal', 
      hasStory: true,
      image: profile3
    },
    { 
      username: 'geniebouc...', 
      hasStory: true,
      image: profile4
    },
    { 
      username: 'mariusz_m...', 
      hasStory: true,
      image: profile5
    },
    { 
      username: 'silfromids', 
      hasStory: true,
      image: profile6
    },
  ];

  const feedPosts = [
    {
      id: 1,
      username: 'flex_filair',
      userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      timestamp: '4d',
      image: 'https://plus.unsplash.com/premium_photo-1753982281853-9411e384483e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: '1,234',
      caption: 'Amazing landscape! 🏔️✨',
      comments: '89'
    },
    {
      id: 2,
      username: 'nature_lover',
      userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
      timestamp: '2h',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      likes: '856',
      caption: 'Peaceful forest vibes 🌲',
      comments: '45'
    },
    {
      id: 3,
      username: 'travel_photographer',
      userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
      timestamp: '5h',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop',
      likes: '2,341',
      caption: 'Sunset at the mountains 🌅',
      comments: '123'
    },
    {
      id: 4,
      username: 'adventure_seeker',
      userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      timestamp: '1d',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      likes: '567',
      caption: 'Epic mountain views! ⛰️',
      comments: '67'
    },
    {
      id: 5,
      username: 'landscape_art',
      userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      timestamp: '3h',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      likes: '1,892',
      caption: 'Nature is art 🎨',
      comments: '98'
    },
    {
      id: 6,
      username: 'mountain_explorer',
      userImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face',
      timestamp: '6h',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      likes: '3,456',
      caption: 'Peak perfection! 🏔️',
      comments: '234'
    },
    {
      id: 7,
      username: 'forest_wanderer',
      userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      timestamp: '8h',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      likes: '1,567',
      caption: 'Lost in the woods 🌳',
      comments: '89'
    },
    {
      id: 8,
      username: 'ocean_dreamer',
      userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
      timestamp: '12h',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop',
      likes: '2,789',
      caption: 'Ocean vibes 🌊',
      comments: '156'
    },
    {
      id: 9,
      username: 'desert_nomad',
      userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
      timestamp: '1d',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      likes: '987',
      caption: 'Desert magic 🏜️',
      comments: '67'
    },
    {
      id: 10,
      username: 'valley_explorer',
      userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      timestamp: '2d',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      likes: '1,234',
      caption: 'Valley views 🏞️',
      comments: '78'
    },
    {
      id: 11,
      username: 'lake_reflections',
      userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      timestamp: '4h',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      likes: '2,156',
      caption: 'Perfect reflections 🌊',
      comments: '134'
    },
    {
      id: 12,
      username: 'sunset_chaser',
      userImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face',
      timestamp: '7h',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop',
      likes: '3,789',
      caption: 'Golden hour magic ✨',
      comments: '245'
    },
    {
      id: 13,
      username: 'wildlife_photographer',
      userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      timestamp: '1d',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      likes: '1,876',
      caption: 'Wild and free 🦅',
      comments: '112'
    },
    {
      id: 14,
      username: 'alpine_adventurer',
      userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
      timestamp: '3d',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      likes: '4,567',
      caption: 'Alpine beauty 🏔️',
      comments: '298'
    },
    {
      id: 15,
      username: 'river_flow',
      userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
      timestamp: '5h',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      likes: '2,345',
      caption: 'Flowing waters 🌊',
      comments: '167'
    },
    {
      id: 16,
      username: 'meadow_walker',
      userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      timestamp: '9h',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      likes: '1,789',
      caption: 'Meadow dreams 🌸',
      comments: '89'
    },
    {
      id: 17,
      username: 'cliff_dweller',
      userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      timestamp: '2d',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      likes: '3,234',
      caption: 'Cliff edge views ⛰️',
      comments: '198'
    },
    {
      id: 18,
      username: 'waterfall_hunter',
      userImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face',
      timestamp: '1d',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      likes: '2,876',
      caption: 'Waterfall wonder 🌊',
      comments: '145'
    },
    {
      id: 19,
      username: 'canyon_explorer',
      userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      timestamp: '6h',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      likes: '1,654',
      caption: 'Canyon depths 🏜️',
      comments: '76'
    },
    {
      id: 20,
      username: 'aurora_chaser',
      userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
      timestamp: '4d',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop',
      likes: '5,432',
      caption: 'Northern lights dance 🌌',
      comments: '321'
    }
  ];

  return (
    <div className="main-content">
      {/* Stories Section */}
      <div className="stories-section">
        <div className="stories-container">
          {stories.map((story, index) => (
            <div key={index} className="story-item">
              <div className="story-avatar">
                <div className="story-border">
                  <div className="story-pic" style={{ backgroundImage: `url(${story.image})` }}></div>
                </div>
              </div>
              <span className="story-username">{story.username}</span>
            </div>
          ))}
          <div className="stories-arrow">
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Feed Posts */}
      {feedPosts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <div className="post-user-info">
              <div className="post-profile-pic" style={{ backgroundImage: `url(${post.userImage})` }}></div>
              <div className="post-user-details">
                <span className="post-username">{post.username}</span>
                <span className="post-timestamp">{post.timestamp}</span>
              </div>
            </div>
            <div className="post-options">
              <FaEllipsisH />
            </div>
          </div>

          <div className="post-image-container">
            <div 
              className={`post-image ${slideDirection}`}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {post.images && post.images.length > 1 ? (
                <div className="image-slider">
                  <img src={post.images[0]} alt="Post" className="post-image-content" />
                  <img src={post.images[1]} alt="Post" className="post-image-content" />
                </div>
              ) : (
                <img src={post.image} alt="Post" className="post-image-content" />
              )}
              {post.images && post.images.length > 1 && (
                <>
                  <div className="image-navigation">
                    {currentImageIndex > 0 && (
                      <button className="nav-btn prev" onClick={handlePrevImage}>
                        <FaChevronLeft />
                      </button>
                    )}
                    {currentImageIndex < post.images.length - 1 && (
                      <button className="nav-btn next" onClick={handleNextImage}>
                        <FaChevronRight />
                      </button>
                    )}
                  </div>
                  <div className="image-indicators">
                    {post.images.map((_, index) => (
                      <div key={index} className={`indicator ${index === currentImageIndex ? 'active' : ''}`}></div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="post-actions">
            <div className="action-buttons">
              <button className="action-btn">
                <img src={heartIcon} alt="Heart" className="action-icon" />
              </button>
              <button className="action-btn">
                <img src={commentIcon} alt="Comment" className="action-icon" />
              </button>
              <button className="action-btn">
                <img src={planeIcon} alt="Send" className="action-icon" />
              </button>
            </div>
            <button className="action-btn bookmark">
              <img src={shareIcon} alt="Share" className="action-icon" />
            </button>
          </div>

          <div className="post-info">
            <div className="likes">{post.likes} likes</div>
            <div className="caption">
              <span className="username">{post.username}</span>
              <span className="caption-text">{post.caption}</span>
            </div>
            <div className="comments">
              <span className="view-comments">View all {post.comments} comments</span>
            </div>
            <div className="post-time">{post.timestamp.toUpperCase()} AGO</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent; 