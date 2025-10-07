import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectToken, selectUserName } from "../../app/selectors";
import { clearCredentials } from "../../features/auth/authSlice";

export default function Nav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(selectToken);
    const userName = useSelector(selectUserName);

    const handleLogout = () => {
        // Nettoyage du store + sessionStorage
        dispatch(clearCredentials());
        navigate("/sign-in");
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src="/images/argentBankLogo.webp"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <div>
                {token && userName ? (
                    <>
                        <Link className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            {userName}
                        </Link>
                        <button
                            className=" main-nav-item logout-btn"
                            onClick={handleLogout}
                        >


                            Sign Out
                        </button>
                    </>
                ) : (

                    <Link className="main-nav-item" to="/sign-in">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}


