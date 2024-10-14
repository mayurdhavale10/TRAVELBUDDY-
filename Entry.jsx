import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EntryForm({ onSubmit }) {
  const [peopleCount, setPeopleCount] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [transportMode, setTransportMode] = useState('cab')
  const [people, setPeople] = useState([{ name: '', contact: '' }])
  const [allowJoin, setAllowJoin] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handlePeopleCountChange = (e) => {
    const value = parseInt(e.target.value, 10)
    setPeopleCount(value)
    
    if (value < people.length) {
      setPeople(people.slice(0, value))
    } else if (value > 0) {
      setErrorMessage('')
    }
  }

  const handlePeopleChange = (index, field, value) => {
    const updatedPeople = [...people]
    updatedPeople[index][field] = value
    setPeople(updatedPeople)
  }

  const handleAddPerson = () => {
    if (people.length < peopleCount) {
      setPeople([...people, { name: '', contact: '' }])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (peopleCount < 1) {
      setErrorMessage('Please enter at least one person.')
      return
    }

    const entryData = {
      peopleCount,
      location,
      date,
      time,
      transportMode,
      people,
      allowJoin,
    }

    onSubmit(entryData)
    navigate('/buddies')
  }

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <h2 className="form-title">Create a New Travel Entry</h2>
      
      {errorMessage && <p className="error-msg">{errorMessage}</p>}

      <div className="form-group">
        <label className="input-label">
          <span className="label-text">Total Number of People:</span>
        </label>
        <input
          type="number"
          className="input-field"
          value={peopleCount}
          onChange={handlePeopleCountChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="input-label">
          <span className="label-text">Location:</span>
        </label>
        <input
          type="text"
          className="input-field"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="input-label">
          <span className="label-text">Date:</span>
        </label>
        <input
          type="date"
          className="input-field"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="input-label">
          <span className="label-text">Time:</span>
        </label>
        <input
          type="time"
          className="input-field"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="input-label">
          <span className="label-text">Mode of Transport:</span>
        </label>
        <select
          className="select-field"
          value={transportMode}
          onChange={(e) => setTransportMode(e.target.value)}
        >
          <option value="cab">Cab</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="flight">Flight</option>
        </select>
      </div>

      <h3 className="section-title">People Details</h3>
      {people.map((person, index) => (
        <div key={index} className="people-details">
          <div className="form-group">
            <label className="input-label">
              <span className="label-text">Name:</span>
            </label>
            <input
              type="text"
              className="input-field"
              value={person.name}
              onChange={(e) => handlePeopleChange(index, 'name', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="input-label">
              <span className="label-text">Contact Number:</span>
            </label>
            <input
              type="text"
              className="input-field"
              value={person.contact}
              onChange={(e) => handlePeopleChange(index, 'contact', e.target.value)}
              required
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="add-person-btn"
        onClick={handleAddPerson}
        disabled={people.length >= peopleCount}
      >
        Add Another Person
      </button>

      <div className="form-group">
        <label className="checkbox-label">
          <span className="label-text">Allow others to join:</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={allowJoin}
            onChange={() => setAllowJoin(!allowJoin)}
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-btn">
          Submit Entry
        </button>
        <button type="button" className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EntryForm