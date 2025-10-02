import { useSelector } from "react-redux";
import { selectUserName } from "../../app/selectors";
import { useState } from "react";
import Modal from "../../components/Modal";
import Nav from "../../containers/Nav";
import Footer from "../../containers/Footer";

import "./style.scss";

const User = () => {
  const userName = useSelector(selectUserName);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouveau username :", newUserName);

    setIsModalOpen(false);
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
          <button
            className="edit-button"
            onClick={() => setIsModalOpen(true)}
          >
            Edit Name
          </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">New Username:</label>
            <input
              type="text"
              id="username"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
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
}


export default User