import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './userlist.css'

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="users-container">
      <div className="users-header">
        <h1>Users List</h1>
        <Link className="create-user-link" to="/create">Create User</Link>
      </div>
      {loading ? <div className="spinner">Loading...</div> : (
        <div className="users-list">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
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
