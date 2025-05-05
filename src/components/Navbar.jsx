import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">SocialSphere</Link>
        <div className="ml-10 space-x-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/profile" className="text-white hover:underline">Profile</Link>
          <Link to="/messages" className="text-white hover:underline">Messages</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
