import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './createuser.css';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', { name, email, phone })
      .then(response => {
        alert('User created successfully');
        navigate('/');
      })
      .catch(error => alert('Failed to create user'));
  };

  return (
    <div className="create-user-container">
      <h1>Create User</h1>
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
