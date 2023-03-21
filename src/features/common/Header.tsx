import { useState } from 'react';
import './Header.scss'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import EmailIcon from '@mui/icons-material/Email';

export const dataNavs = [
    {
        name: 'Home',
        icon: <HomeIcon color="inherit" />,
        slug: 'hero-section'
    },
    {
        name: 'About',
        icon: <PersonIcon color="inherit" />,
        slug: 'about'
    },
    {
        name: 'Resume',
        icon: <TextSnippetIcon color="inherit" />,
        slug: 'resume'
    },
    {
        name: 'Portfolio',
        icon: <RecentActorsIcon color="inherit" />,
        slug: 'portfolio'
    },
    {
        name: 'Services',
        icon: <LaptopChromebookIcon color="inherit" />,
        slug: 'services'
    },
    {
        name: 'Contact',
        icon: <EmailIcon color="inherit" />,
        slug: 'contact'
    }
]

function Header() {
    const [navActive, setNavActive] = useState(0)
    return (
        <div id="header">
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    {dataNavs.map((item, index) => (
                        <li key={index} onClick={() => setNavActive(index)} ><a className={`nav-link scrollto ${index === navActive ? 'active' : ''}`} href={`#${item.slug}`} > {item.icon} <span>{item.name}</span></a></li>
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