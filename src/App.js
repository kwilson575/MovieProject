import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import AboutView from './components/AboutView.js';
import SearchView from './/components/SearchView.js';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  //console.log(searchText)
  setTimeout(() => {
    setSearchText("New text")
    //console.log(searchText, "..........is the new text")
  }, 2000) 

  return (
    <div>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/search" element={<SearchView />} keyword={searchText} searchResults={searchResults} />
          </Routes>
    </div> 
  );
}

export default App;
