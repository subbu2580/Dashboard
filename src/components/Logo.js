import React from 'react'
import './logo.css';

function Logo() {
  const handleToggleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar')
  };

  return (
    <div className='d-flex align-items-center justify-content-between'>
      <a href='/' className='logo d-flex align-items-center'>
        <span>My Dashboard</span>
      </a>
      <i class="bi bi-menu-up"
        onClick={handleToggleSideBar}

      ></i>

    </div>
  )
}

export default Logo