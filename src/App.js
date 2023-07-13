import React from 'react';
import './App.css';
import LoginPage from './login/login';
import RegistrationForm from './registration/registration';
import Customerdetails from './admin/customerdetails';
import Navbar from './Navbar/navbar';

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <img
            src="https://www.vhv.rs/dpng/d/427-4273719_random-logo-transparent-background-hd-png-download.png"
            height="60px"
          />
          <h1>Omega Banking</h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/accounts">Accounts</a>
              </li>
              <li>
                <a href="/transactions">Transactions</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Navbar /> */}
        <main>
          <h2>Secure and Convenient Online Banking</h2>
          <p>
            Manage your accounts and perform transactions from the comfort of
            your home.
          </p>
          <button>Sign In</button>
          <button>Sign Up</button>
        </main>
        <LoginPage />
        <RegistrationForm />
        {/* <Customerdetails/> */}
        <footer>
          <p>
            &copy; {new Date().getFullYear()} Omega Banking. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
