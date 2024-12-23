import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <>
      <div style={{textAlign: 'center', display:'flex',justifyContent:'space-around'}}>
        <h1>hello</h1>

        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
