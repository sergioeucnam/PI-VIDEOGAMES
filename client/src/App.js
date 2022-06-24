import './App.css';
import { Route } from 'react-router-dom';
import firstScreen from './components/firstScreen/FirstScreen'
import home from './components/home/Home'
import CreateVideogame from './components/createGame/CreateGame.jsx';
import about from './components/about/About';
import gamedetails from './components/gameDetails/Gamedetails';

import searchByName from './components/searchbar/searchByName';
function App() {
  return (
    <>
      <Route exact path='/' component={firstScreen} />
      <Route path='/home' component={home} />
      <Route path='/createGame' component={CreateVideogame} />
      <Route path='/about' component={about} />
      <Route path='/videogame/:id' component={gamedetails} />
      {/* <Route path='/videogames/:name' component={searchByName} /> */}
    </>
  );
}

export default App;
