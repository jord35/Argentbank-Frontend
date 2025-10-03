import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectUserName, selectToken } from "../../app/selectors";
import { useUpdateUsernameMutation } from "../../features/api/apiSlice";
import { setCredentials } from "../../features/auth/authSlice";
import { useState } from "react";
import Modal from "../../components/Modal";
import Nav from "../../containers/Nav";
import Footer from "../../containers/Footer";

import "./style.scss";

const User = () => {
  const user = useSelector(selectUser);
  const userName = useSelector(selectUserName);
  const token = useSelector(selectToken);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  const dispatch = useDispatch();
  const [updateUsername] = useUpdateUsernameMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const result = await updateUsername({
        userName: newUserName,
      }).unwrap();


      dispatch(setCredentials({ token, user: result.body }));

      setIsModalOpen(false);
      setNewUserName("");
    } catch (err) {
      console.error("Erreur lors de la mise à jour du username :", err);
    }
  };


  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userName || "Loading..."}
          </h1>
          <button className="edit-button" onClick={() => setIsModalOpen(true)}>
            Edit Name
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <section className="modal-form">
            <i className="fa fa-user-circle modal-icon"></i>
            <h1>Edit Username</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="username">New Username</label>
                <input
                  type="text"
                  id="username"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="sign-in-button">
                Save
              </button>
            </form>
          </section>
        </Modal>

        <h2 className="sr-only">Accounts</h2>

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default User;
