import logo from './logo.svg';
import './App.css';
import GlobalStyle from './theme/GlobalStyle'
import Perfection from './components/Perfection';
import Ourservices from './components/Ourservices';
import Letstalk from './components/Letstalk';
import MyHero from './components/MyHero';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav'




function App() {
  return (
    <>
<Nav/>
{/* <Header/>  */}
<MyHero/>
<Perfection/>
<Ourservices/>
<Letstalk/>
{/* <Form/> */}
{/* <Room /> */}
{/* <Ballery/> */}
<Footer/>
    </>
  );
}

export default App;
