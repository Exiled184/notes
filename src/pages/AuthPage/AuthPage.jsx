import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome</h1>
      <button
        onClick={() => setShowSignUp(!showSignUp)}
        className="mb-6 py-2 px-4 rounded-md font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {showSignUp ? 'Log In' : 'Sign Up'}
      </button>
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </main>
  );
}