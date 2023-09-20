import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(authActions.logout());
  };
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>

      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
