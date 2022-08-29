import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">

        {/*------Header--------*/}
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo"/>
          
        </header>

        {/*------Main part--------*/}
        <main>
          <Dictionary defaultKeyword="tennis" />
        </main>
        
        {/*------Footer--------*/}
        <footer className="App-footer">
          <small>Coded by SheCodes</small>
          </footer>
      </div>
    </div>
  );
}

export default App;
