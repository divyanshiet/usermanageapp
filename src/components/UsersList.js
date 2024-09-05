import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './userlist.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);  // State to store the list of users
  const [loading, setLoading] = useState(true);  // State to manage loading state

  // Fetch users when the component loads
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);  // Populate the users state with fetched data
        setLoading(false);  // Turn off the loading state once data is fetched
      });
  }, []);  // Empty dependency array to ensure this only runs once when the component mounts

  return (
    <div className="users-container">
      <div className="users-header">
        <h1>Users List</h1>
        {/* Link to navigate to the user creation form */}
        <Link className="create-user-link" to="/create">Create User</Link>
      </div>
      {/* Show loading spinner while fetching users */}
      {loading ? <div className="spinner">Loading...</div> : (
        <div className="users-list">
          {/* Render each user as a card with edit link */}
          {users.map(user => (
            <div key={user.id} className="user-card">
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              {/* Link to edit the user */}
              <Link to={`/user/${user.id}`}>
                <button>Edit</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersList;
