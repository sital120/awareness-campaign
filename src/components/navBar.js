import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleHomeClick = () => {
    navigate('/');
  };
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLogoutClick = () => {
    // Clear the token and update the state
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/home');
  };

  return (
    <nav id="nav">
      <ul>
        {!isLoggedIn && (
          <>
            <li className="current">
              <a onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Home</a>
            </li>
            <li>
              <a onClick={handleLoginClick} style={{ cursor: 'pointer' }}>Login</a>
            </li>
            <li>
              <a onClick={handleSignupClick} style={{ cursor: 'pointer' }}>Signup</a>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li style={{ marginLeft: 'auto' }}>
            <a onClick={handleLogoutClick} style={{ cursor: 'pointer' }}>Logout</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
