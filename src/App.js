import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WormSec
        </p>
        <p>
          Coming soon
        </p>
        <p>
          <a href="irc://wormsec.org">IRC: wormsec.org:6667</a>
        </p>
        <p>
          <code>ssh wormsec.org</code>
        </p>
      </header>
    </div>
  );
}

export default App;
