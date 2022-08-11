import './App.css';
import './Components/NavBar';
import './Components/Search';

import NavBar from './Components/NavBar';
import Search from './Components/Search';
import Livros from './Components/Livros';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className="box">
        <NavBar />
        <Search />
        <Livros />
        <Footer />
      </div>
    </div>
  );
}

export default App;
