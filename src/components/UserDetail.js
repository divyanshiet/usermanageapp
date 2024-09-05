import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './userdetail.css';

const UserDetail = () => {
    const { id } = useParams();  // Get the user ID from the URL parameters
    const navigate = useNavigate();  // Navigate to different routes programmatically
    const [user, setUser] = useState({  // State to store user details
      name: '',
      email: '',
      phone: ''
    });
    const [loading, setLoading] = useState(true);  // State to manage loading state
    const [error, setError] = useState(null);  // State to manage errors during API calls
    
    // Fetch user details based on the ID when the component loads
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          setUser(response.data);  // Populate the user state with fetched data
          setLoading(false);  // Turn off the loading state once data is fetched
        })
        .catch(() => {
          setError('Failed to fetch user data');  // Set an error message if the API call fails
          setLoading(false);
        });
    }, [id]);  // Trigger this effect when the ID changes

    // Handle user update when the "Update" button is clicked
    const handleUpdate = () => {
      axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
        .then(() => {
          alert('User updated successfully (locally simulated)'); 
          navigate('/');  
        })
        .catch(() => alert('Failed to update user'));  
    };

    // Handle user deletion when the "Delete" button is clicked
    const handleDelete = () => {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(() => {
          alert('User deleted successfully');  // Notify user of successful deletion
          navigate('/');  // Navigate back to the home page
        })
        .catch(() => alert('Failed to delete user'));
    };

    // Handle input changes for the form fields
    const handleInputChange = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value  // Dynamically update the field in the user object
      });
    };

    // Show loading spinner while fetching data
    if (loading) return <div className="spinner">Loading...</div>;
    // Display error message if data fetching fails
    if (error) return <div className="error-message">{error}</div>;

    return (
      <div className="user-detail-container">
        <h1>Edit User</h1>
        {/* User detail form to edit user info */}
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

        {/* Buttons to update or delete the user */}
        <div className="user-actions">
          <button className="update-btn" onClick={handleUpdate}>Update</button>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    );
};

export default UserDetail;
