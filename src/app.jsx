import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='body'>
      <header className='container-fluid'>
        <nav className="navbar fixed-top nav-light">
        <a class="navbar-brand" href="#">RC</a>
          <menu className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='home.html'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='archive.html'>Archive</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='info.html'>Info</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='chat.html'>Chat</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='index.html'>Logout</a>
            </li>
          </menu>
        </nav>
      </header>

      <main>App components go here</main>

      <footer>
        <a href="https://github.com/cammaicey/startup">My Github Repo</a>
      </footer>
    </div>
  );
}