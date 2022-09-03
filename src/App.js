import logo from './logo.svg';
import './App.css';
import NameNumber from './section1/nameNumber';
import SearchDelete from './section2/searchDelete';
import ListItem from './listItem/lisItem';

function App() {
  return (
    <div className="main">
   <NameNumber/>
   <SearchDelete/>
   <div id="list">
   <ListItem name="Alice" number="(816)-403-5456"/>
   <ListItem name="Bob" number="(572)-566-2397"/>
   <ListItem name="Cris" number="(864)-309-4841"/>
   <ListItem name="Daniel" number="(816)-403-5456"/>
   </div>
   </div>
   );
}

export default App;
