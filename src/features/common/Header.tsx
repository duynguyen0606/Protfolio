import { useState } from 'react';
import './Header.scss'

export const dataNavs = [
    {
        name: 'Home'
    },
    {
        name: 'About'
    },
    {
        name: 'Resume'
    },
    {
        name: 'Portfolio'
    },
    {
        name: 'Services'
    },
    {
        name: 'Contact'
    }
]

function Header() {
    const [navActive, setNavActive] = useState(0)
    return (
        <div id="header">
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    {dataNavs.map((item, index) => (
                        <li key={index}><a className={`nav-link scrollto ${index === navActive ? 'active' : ''}`} >{item.name}</a></li>
                    ))}
                    {/* <li><a className="nav-link scrollto">Home</a></li>
                    <li><a className="nav-link scrollto">About</a></li>
                    <li><a className="nav-link scrollto">Resume</a></li>
                    <li><a className="nav-link scrollto">Portfolio</a></li>
                    <li><a className="nav-link scrollto">Services</a></li>
                    <li><a className="nav-link scrollto">Contact</a></li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Header;