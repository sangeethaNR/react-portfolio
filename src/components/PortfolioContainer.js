import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Project from './pages/Project';
import About from './pages/About';
import Resume from './pages/Resume';
// import { useTheme } from '../utils/themeContext';
//import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
//   const [darkTheme,toggleTheme]=useTheme();
// const themeStyling = {
//   background: darkTheme
//   ? '-webkit-linear-gradient(top left, #150C17, #535353)'
//   : '-webkit-linear-gradient(bottom, #FFFFFF, #EDBAAB)'
// }

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <button id="button" onClick={toggleTheme} className="btn" type="button">
        Toggle dark theme
      </button>
      <div style={themeStyling}>
        <h1>Theme Component</h1>
      </div> */}
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
