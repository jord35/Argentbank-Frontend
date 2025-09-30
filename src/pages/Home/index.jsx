import Nav from "../../containers/Nav";
import Footer from "../../containers/Footer";
import Features from "../../containers/Features";

import "./style.scss";


const HomePage = () => {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>

        <Features />
      </main>

      <Footer />
    </>
  );
};
export default HomePage;
