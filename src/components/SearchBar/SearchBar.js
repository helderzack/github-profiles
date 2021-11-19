import './SearchBar.css';

export default function SearchBar() {
  return(
    <form>
      <input id="search-bar" type="search" placeholder="Enter user name"></input>
      <input id="search-button" type="submit" value="Search!"></input>
    </form>
  );
}