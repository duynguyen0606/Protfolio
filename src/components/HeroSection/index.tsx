import { Container } from '@mui/material';
import './style.scss'
import Typed from 'react-typed';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

function HeroSection() {
    return (
        <section id="hero-section">
            <Container maxWidth='lg' sx={{ zIndex: 1 }}>
                <h1>Duy Nguyễn</h1>
                <p>
                    I'm
                    &nbsp;
                    <Typed
                        strings={[
                            'Developer',
                            'Freelancer'
                        ]}
                        typeSpeed={100}
                        backSpeed={80}
                        loop
                    />
                </p>
                <div className="hero-section-socials-link">
                    <a href="/"><FacebookIcon color="inherit" /> </a>
                    <a href="/"><InstagramIcon color="inherit" /> </a>
                    <a href="/"><LinkedInIcon color="inherit" /> </a>
                    <a href="/"><EmailIcon color="inherit" /> </a>
                    <a href="/"><TwitterIcon color="inherit" /> </a>
                </div>
            </Container>
        </section>
    );
}

export default HeroSection;