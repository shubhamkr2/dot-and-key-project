// Import necessary modules
import React, { useEffect, useState } from "react";
import styles from "../Styles/Navbar.module.css";
import { ImSearch } from "react-icons/im";
import { FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { NavigationBar } from "./NavigationBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MenuSideBar } from "./MenuSideBar";
import { LogIn } from "../Pages/LogIn";
import { SignUp } from "../Pages/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchSuggestions } from "../Redux/actions/searchActions";
import { userLogOut } from "../Redux/actions/user.action";

// Define Navbar component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const { token, isAuth } = useSelector((state) => state.user);
  const [loggedUserName, setLoggedUserName] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { suggestions, isLoading } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(userLogOut());
    setIsDropDownOpen(!isDropDownOpen);
  }
  useEffect(() => {
    const name = localStorage.getItem("user_name") || [];
    if (name.length > 0) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    setLoggedUserName(name);
  }, [token]);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;

    // Update the search value in component state
    setSearchValue(searchValue);

    // Dispatch the action to fetch suggestions
    dispatch(fetchSearchSuggestions(searchValue));
  };
  console.log(suggestions);
  return (
    <>
      {/* Navbar container */}
      <div className={styles.sideBar}>
        {isOpen && (
          <MenuSideBar
            name={loggedUserName}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            login={login}
          />
        )}
      </div>
      <div className={styles.nav_container}>
        {/* Hamburger menu icon */}
        <div className={styles.hamburgerIcon}>
          <IconContext.Provider value={{ size: "2rem" }}>
            <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
          </IconContext.Provider>
        </div>

        {/* Logo */}
        <Link to="/">
          <div className={styles.logo}>
            <img
              src="https://github.com/shubhamkr2/Dot-Key-Project/blob/main/dot_and_key_clone/src/Logo/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?raw=true"
              alt="logo"
            />
          </div>
        </Link>
        {/* Search box */}
        <div className={styles.Search_Box}>
          <input
            type="text"
            placeholder="Search your product"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <IconContext.Provider value={{ size: "2rem", color: "white" }}>
            <ImSearch />
          </IconContext.Provider>
          {/* Display loading indicator if suggestions are being fetched */}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            // Display the search suggestions
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion.id}>{suggestion.name}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Cart and profile icons */}
        <div className={styles.cartLogo_profileIcon}>
          <div className={styles.cart_logo}>
            <IconContext.Provider value={{ size: "2rem" }}>
              <FiShoppingCart />
            </IconContext.Provider>
          </div>
          {login ? (
            <div
              className={styles.user_profile}
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            >
              <IconContext.Provider value={{ size: "2rem" }}>
                <CgProfile />
              </IconContext.Provider>
              <span>{loggedUserName}</span>
            </div>
          ) : (
            <div className={styles.login_signup}>
              <Link to="/login" element={<LogIn />}>
                <button className={styles.login_btn}>Login</button>
              </Link>
              <Link to="/signup" element={<SignUp />}>
                <button className={styles.signup_btn}>Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {isDropDownOpen ? (
        <div className={styles.profile_drop_down}>
          <Link
            to="/account"
            // element={<Sunscreens />}
            onClick={() => setIsDropDownOpen(false)}
          >
            Account
          </Link>
          <Link
            to="/order"
            // element={<Moisturizers />}
            onClick={() => setIsDropDownOpen(false)}
          >
            Order History
          </Link>
          <Link
            to="/login"
            // element={<LogIn />}
            onClick={handleSignOut}
          >
            Sign Out
          </Link>
        </div>
      ) : (
        ""
      )}

      <div className={styles.Mob_Search_Box}>
        <input
          type="text"
          placeholder="Search your product"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <IconContext.Provider value={{ size: "2rem", color: "white" }}>
          <ImSearch />
        </IconContext.Provider>
        {/* Display loading indicator if suggestions are being fetched */}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          // Display the search suggestions
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion.id}>{suggestion.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

// Export Navbar component
export { Navbar };
