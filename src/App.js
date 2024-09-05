import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './components/UsersList';
import UserDetail from './components/UserDetail';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/create" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
