import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import github_logo from './assets/images/github-logo.png';

function App() {
  return (
    <main>
      <section className="app-title">
        <img src={github_logo} alt="Github Logo"/>
        <h1>Github<br/>Profiles</h1>
      </section>
      <section className="search-bar">
        <h2>Search Github Profiles Here!</h2>
        <SearchBar/>
      </section>
    </main>
  );
}

export default App;
