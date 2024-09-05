import React, { useState } from 'react';
import axios from 'axios'; // Axios for making API requests
import { useNavigate } from 'react-router-dom'; // useNavigate for programmatic navigation
import './createuser.css'; // Importing CSS for styling

const CreateUser = () => {
  const [name, setName] = useState(''); // State for storing the name input
  const [email, setEmail] = useState(''); // State for storing the email input
  const [phone, setPhone] = useState(''); // State for storing the phone input
  const navigate = useNavigate(); // Hook to navigate after form submission

  // Function to handle form submission and API request to create user
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing page reload
    axios.post('https://jsonplaceholder.typicode.com/users', { name, email, phone }) // API call to create user
      .then(response => {
        alert('User created successfully'); // Success message
        navigate('/'); // Navigate to home page after successful user creation
      })
      .catch(error => alert('Failed to create user')); // Error handling
      
      alert(
        'Here we are using a Fake API not any database therefore these updation were not taking place in actually, therefore it will not be visible!!'
       )
  };

  return (
    <div className="create-user-container">
      <h1>Create User</h1>
      
      {/* Form for user creation */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
