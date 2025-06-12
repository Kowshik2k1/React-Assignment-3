import React, { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import Login from "components/Login/Login";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  // To toggle the hamburger menu in mobile
  const handleClick = () => {
    setShow(!show);
    setIsOpen(!isOpen);
  };

  // To do search if we enter search text in input field and to close the hamburger menu in mobile
  const handleSearch = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setShow(false);

    if (searchInput.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchInput)}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="header-wrap site-container">
      <div
        className="logo"
        onClick={() => {
          setSearchInput("");
        }}
      >
        <Link to="/">
          <img
            src="/nike-logo.jpg"
            width="70"
            alt="nike-logo"
            title="nike-logo"
          />
        </Link>
      </div>
      <div className="mobile-menu-wrap">
        <div className="mobile-menu d-lg-none" onClick={handleClick}>
          {isOpen ? (
            <img src="/close-icon.png" alt="Close" width={50} height={50} />
          ) : (
            <img
              src="/hamburger-open.svg"
              alt="Hamburger"
              width={50}
              height={50}
            />
          )}
        </div>
        {/* Mobile menu */}
        {show && (
          <div className="mobile-menu-content">
            <div className="menu">
              <ul>
                <li>
                  <Link to="/" onClick={handleClick}>Menu</Link>
                </li>
                <li>
                  <Link to="/location" onClick={handleClick}>Location</Link>
                </li>
                <li>
                  <Link to="/about" onClick={handleClick}>About</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleClick}>Contact</Link>
                </li>
              </ul>
            </div>
            <form
              onSubmit={handleSearch}
              className="search-wrap d-lg-none py-2"
            >
              <input
                type="text"
                placeholder="Search here..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="search-item w-100"
                id="search-input"
                name="search"
              />
            </form>
            <div className="login">
              <button className="btn" onClick={() => setShowLogin(true)}>
                Login
              </button>
              <Login show={showLogin} onHide={() => setShowLogin(false)} />
            </div>
          </div>
        )}
      </div>
      <div className="menu d-none d-lg-block">
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSearch} className="search-wrap d-none d-lg-block">
        <input
          type="text"
          placeholder="Search here..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-item"
        />
      </form>
      <div className="login d-none d-lg-block">
        <button className="btn" onClick={() => setShowLogin(true)}>
          Login
        </button>
        <Login show={showLogin} onHide={() => setShowLogin(false)} />
      </div>
    </div>
  );
}

export default Header;
