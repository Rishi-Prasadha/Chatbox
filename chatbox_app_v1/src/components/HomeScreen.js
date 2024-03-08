import React, { useState } from 'react';
import './HomeScreen.css';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([
    { id: 1, query: 'Are there any events for start-ups in Houston this week?', timestamp: 'Yesterday' },
    { id: 2, query: 'I am looking for Houston Co-Working options. Can you help?', timestamp: 'One Week Ago' },
    { id: 3, query: 'What are the most revenant networking events for Product Leaders?', timestamp: 'One Week Ago' },
    { id: 4, query: 'Can you recommend any start-up mentorship opportunities in Houston Texas?', timestamp: 'One Week Ago' },
    { id: 5, query: 'What are some Houston start-up support organizations?', timestamp: 'Last month' },
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRemoveSearch = (id) => {
    setSearchHistory(searchHistory.filter((search) => search.id !== id));
  };

  const renderSearchHistory = () => {
    return searchHistory.map((search) => (
      <div key={search.id} className="search-history-item">
        <div className="search-query">{search.query}</div>
        <div className="search-timestamp">{search.timestamp}</div>
        <button className="remove-button" onClick={() => handleRemoveSearch(search.id)}>
          Remove
        </button>
      </div>
    ));
  };

  return (
    <div className="home-screen">
      <nav className="top-nav">
        <div className="nav-item">Home</div>
        <div className="nav-item">Profile</div>
        <div className="nav-item">Settings</div>
      </nav>
      <div className="content">
        <div className="greeting">Welcome back, Impact Hub Team</div>
        <div className="search-container">
          <input
            type="text"
            placeholder="How can Guzo connect you today..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <div className="search-suggestions">
            <div>Try searching:</div>
            <div>How do I validate my ideas with customers?</div>
            <div>How do I price my product/offering?</div>
            <div>Do I need to bring on a cofounder?</div>
            <div>How do I create a brand?</div>
          </div>
        </div>
        <div className="search-history">
          <h3>Search History</h3>
          <div className="see-all">See All</div>
          {renderSearchHistory()}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;