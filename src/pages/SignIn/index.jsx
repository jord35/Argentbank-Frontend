import { useLoginMutation, useLazyGetProfileQuery } from "../../features/api/apiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

import Nav from "../../containers/Nav";
import Footer from "../../containers/Footer";

import "./style.scss";

const SignIn = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const [getProfile] = useLazyGetProfileQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.username.value;
    const password = e.target.password.value;

    try {
      const result = await login({ email, password }).unwrap();
      const token = result.body.token;
      console.log("Token reçu de l'API :", result.body.token);

      dispatch(setCredentials({ token, user: null }));
      sessionStorage.setItem("token", token);

      const profile = await getProfile().unwrap();
      dispatch(setCredentials({ token, user: profile.body }));


      navigate("/user");
    } catch (err) {
      console.error("Login failed: ", err);
    }
  };

  return (
    <>
      <header>
        <Nav />
      </header>

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" autoComplete="username" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button" disabled={isLoading}>
              {isLoading ? "Connexion..." : "Sign In"}
            </button>
            {error && <p style={{ color: "red" }}>Erreur de connexion</p>}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
