import './App.css';
import Section from './components/Section';
import logoNetflix from './assets/img/logo-netflix.png';

const App = () => {
  return (
    <div className="container">
      <div>
        <img src={logoNetflix} alt="logo-site" className="logo" />
      </div>
      <Section index="0" />
      <Section index="1" />
      <Section index="2" />
      <Section index="3" />
      <Section index="4" />
      <Section index="5" />
    </div>
  );
};

export default App;
