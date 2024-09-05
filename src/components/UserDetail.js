import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './userdetail.css';

const UserDetail = () => {
    const { id } = useParams();  
    const navigate = useNavigate();
    const [user, setUser] = useState({
      name: '',
      email: '',
      phone: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(() => {
          setError('Failed to fetch user data');
          setLoading(false);
        });
    }, [id]);
  
    const handleUpdate = () => {
      axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
        .then(() => {
          alert('User updated successfully (locally simulated)');
          navigate('/');
        })
        .catch(() => alert('Failed to update user'));
    };
  
    const handleDelete = () => {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(() => {
          alert('User deleted successfully');
          navigate('/');
        })
        .catch(() => alert('Failed to delete user'));
    };
  
    const handleInputChange = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      });
    };
  
    if (loading) return <div className="spinner">Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;
  
    return (
      <div className="user-detail-container">
        <h1>Edit User</h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleInputChange}
            required
          />
        </form>
  
        <div className="user-actions">
          <button className="update-btn" onClick={handleUpdate}>Update</button>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    );
  };
  
  export default UserDetail;
  