import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Search from "/search.svg";
import Cart from "/cart.svg";
import Profile from "/person_2.svg";
import Wishlist from "/favorite.svg";
function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userJWT");
    navigate("/login");
  };
  return (
    <nav className="flex justify-between items-center py-4 border-2 p-8">
      <div className="flex gap-8">
        <div className="text-xl font-bold">Dignizant Store</div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-2 py-1"
          />
          <img src={Search} alt="" />
        </div>
      </div>
      <div className="flex gap-3">
        <div>
          <div className="flex gap-2">
          <h1>Ashik</h1>
          <img
            src={Profile}
            className="cursor-pointer"
            alt=""
            onClick={toggleDropdown}
            />
            </div>
          {dropdownOpen && (
            <div className="absolute bg-white border border-gray-300 rounded-md p-2 top-16 right-16 z-10">
              <ul>
                <li>
                  <Link
                    to="/profile"
                    className="block py-2 px-4 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </li>
                <li
                  onClick={handleLogout}
                  className="cursor-pointer block py-2 px-4 hover:bg-gray-100"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
          <img src={Cart} className="cursor-pointer" alt="" />
        <img src={Wishlist} className="cursor-pointer" alt="" />
      </div>
    </nav>
  );
}

export default NavBar;
