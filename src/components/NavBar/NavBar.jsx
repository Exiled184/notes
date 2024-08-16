import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-white text-lg">Welcome, {user.name}</span>
        <div className="space-x-4">
          <Link
            to="/notes"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to=""
            onClick={handleLogOut}
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Log Out
          </Link>
        </div>
      </div>
    </nav>
  );
}