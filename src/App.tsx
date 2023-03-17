import './App.css';
import Layout from './features/common/Layout';
import HomeComponent from './components/Home';
import AboutComponent from './components/About';
import ResumeComponent from './components/Resume';
import Portfolio from './components/Portfolio';
import ServicesComponent from './components/Services';
import ContactComponent from './components/Contact';
import HeroSection from './components/HeroSection';
import './styles/_global.scss'
function App() {
  return (
    <div className="App">
      <Layout>
        <HeroSection />
        <AboutComponent />
        <ResumeComponent />
        <Portfolio />
        <ServicesComponent />
        <ContactComponent />
      </Layout>
    </div>
  );
}

export default App;
