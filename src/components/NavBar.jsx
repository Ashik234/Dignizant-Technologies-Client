import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userJWT");
    navigate("/login");
  };
  return (
    <nav className="flex justify-between items-center py-4 border-2 p-8">
      <div className="flex gap-8">
        <div className="text-xl font-bold">Dignizant Store</div>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md px-2 py-1 mr-2 focus:outline-none"
        />
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/profile" className="text-blue-500 hover:text-blue-700">
            Profile
          </Link>
        </li>
        <li onClick={handleLogout} className="cursor-pointer">
          Logout
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
