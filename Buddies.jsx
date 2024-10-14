import React, { useState } from 'react';

// Sample data for demonstration
const sampleBuddies = [
  { id: 1, location: 'Paris', date: '2024-10-01', time: '12:00', peopleCount: 3 },
  { id: 2, location: 'New York', date: '2024-10-02', time: '15:00', peopleCount: 5 },
  { id: 3, location: 'Tokyo', date: '2024-10-03', time: '18:00', peopleCount: 2 },
  // Add more sample entries as needed
];

function Buddies() {
  const [buddies, setBuddies] = useState(sampleBuddies);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(20);
  const [filter, setFilter] = useState({
    location: '',
    date: '',
  });

  // Filter buddies based on input criteria
  const filteredBuddies = buddies.filter(buddy => {
    return (
      (filter.location ? buddy.location.toLowerCase().includes(filter.location.toLowerCase()) : true) &&
      (filter.date ? buddy.date === filter.date : true)
    );
  });

  // Get current entries for pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredBuddies.slice(indexOfFirstEntry, indexOfLastEntry);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="buddies-content">
      <h1 className="text-2xl font-bold mb-4">Buddies</h1>

      {/* Filter Section */}
      <div className="filter-section mb-4">
        <input
          type="text"
          placeholder="Filter by location"
          className="input input-bordered mr-2"
          value={filter.location}
          onChange={(e) => setFilter({ ...filter, location: e.target.value })}
        />
        <input
          type="date"
          className="input input-bordered"
          value={filter.date}
          onChange={(e) => setFilter({ ...filter, date: e.target.value })}
        />
      </div>

      {/* Display Buddies Entries */}
      <div className="entry-list">
        {currentEntries.map(buddy => (
          <div key={buddy.id} className="entry-box">
            <h2 className="font-semibold">{buddy.location}</h2>
            <p>Date: {buddy.date}</p>
            <p>Time: {buddy.time}</p>
            <p>People Count: {buddy.peopleCount}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredBuddies.length / entriesPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Buddies;
