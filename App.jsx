import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NewEntryForm from './components/NewEntryForm';
import FriendsList from './components/FriendsList';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  const [entries, setEntries] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  function addEntry(newEntry) {
    setEntries([...entries, newEntry])
  }

  const updateSearch = (term) => {
    setSearchTerm(term)
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Header toggleDarkMode={toggleDarkMode} />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/new-entry"
              element={<NewEntryForm onSubmit={addEntry} />}
            />
            <Route
              path="/friends"
              element={
                <FriendsList
                  entries={entries}
                  searchTerm={searchTerm}
                  onSearchChange={updateSearch}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;