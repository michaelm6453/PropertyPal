// src/components/AuthModal.js
import React, { useState } from 'react';

const AuthModal = ({ onClose, onLogin, onRegister }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Additional state for registration fields
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('Traveler');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      onLogin({ username, email, password, userType }); // Include username and userType in the login credentials
    } else {
      onRegister({ username, password, email, firstName, lastName, userType });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* ... Space for additional components */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {isLogin ? (
          <>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="Traveler">Traveler</option>
              <option value="Owner">Owner</option>
            </select>
          </>
            ) : (
              <>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <select value={userType} onChange={(e) => setUserType(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="Traveler">Traveler</option>
                  <option value="Owner">Owner</option>
                </select>
              </>
            )}
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue active:bg-blue-700 transition duration-150 ease-in-out">
                {isLogin ? 'Login' : 'Register'}
              </button>
            </div>
            <div>
              <button type="button" onClick={() => setIsLogin(!isLogin)} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:border-gray-300 focus:ring-gray active:bg-gray-300 transition duration-150 ease-in-out">
                {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
              </button>
            </div>
            <div className="mt-6">
            <button onClick={onClose} className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:border-gray-300 focus:ring-gray active:bg-gray-50 transition duration-150 ease-in-out">
              Close
            </button>
          </div>
          </form>
        </div>    
  );
};

export default AuthModal;
