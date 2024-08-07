import React from 'react'
import './sidebar.css';

function Siderbar() {
    return (
        <aside id='sidebar' className='sidebar'>
            <ul className='sidebar-nav' id='sidebar-nav'>
                <li className='nav-item'>
                    <a className='nav-link' href='/'>
                    <img src='../Images/dashboard.png' alt="text" style={{height:"30px"}}/>
                    
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        <img src='../Images/Inventory.png' alt="text" style={{height:"30px"}}/>
                        <span>Inventory</span>
                    </a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        <img src='../Images/Order.png' alt="text" style={{height:"30px"}}/>
                        <span>Order</span>
                    </a>
                </li>
            
                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        <img src='../Images/return.png' alt="text" style={{height:"30px"}}/>
                        <span>Returns</span>
                    </a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        <img src='../Images/customers.png' alt="text" style={{height:"30px"}}/>
                        <span>Customers</span>
                    </a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        <img src='../Images/shipping.png' alt="text" style={{height:"30px"}}/>
                        <span>Shipping</span>
                    </a>
                </li>


                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        <img src='../Images/Channel.png' alt="text" style={{height:"30px"}}/>
                        <span>Channel</span>
                    </a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        <img src='../Images/Integrations.png' alt="text" style={{height:"30px"}}/>
                        <span>Integrations</span>
                    </a>
                </li>


                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        <img src='../Images/calculator.png' alt="text" style={{height:"30px"}}/>
                        <span>calculator</span>
                    </a>
                </li>


                
                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        <img src='../Images/reports.png' alt="text" style={{height:"30px"}}/>
                        <span>Reports</span>
                    </a>
                </li>


                <li className='nav-item'>
                    <a className='nav-link' href='#'>
                        <img src='../Images/settings.png' alt="text" style={{height:"30px"}}/>
                        <span>Settings</span>
                    </a>
                </li>

            </ul>

        </aside>
    )
}

export default Siderbar;