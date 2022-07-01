import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <h3>Task</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li><Link to='/'>Task</Link></li>
                        <li><Link to='/complete'>Completed Task</Link></li>
                        <li><Link to='/cal'>Calender</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold ml-10 text-2xl'>Daily Task</h2>
                </div>

            </div>
        </div>
    );
};

export default Header;