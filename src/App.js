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
          <small>
          This project was coded by {" "}
        <a href="https://github.com/t-taia/" target="_blank" rel="noopener noreferrer">
          Taia</a> and is{" "}  
        <a href="https://github.com/t-taia/dictionary-project" target="_blank" rel="noopener noreferrer"> 
        open-sourced on GitHub</a>
          </small>
          </footer>
      </div>
    </div>
  );
}

export default App;
