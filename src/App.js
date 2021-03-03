import './App.css'
import Kirppari from './components/Kirppari'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Etusivu.js'
import Reserve from './pages/Reserve.js'
import Reservations from './pages/Reservations.js'
import Price from './pages/Price.js'
import Saldo from './pages/Saldo.js'
import Personal from './pages/Personal.js'
import Logout from './pages/Logout.js'
import Info from './pages/Info.js'


function App() {
  return (
    //<Kirppari/>
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/reserve' exact component={Reserve}/>
        <Route path='/reservations' exact component={Reservations}/>
        <Route path='/price' exact component={Price}/>
        <Route path='/saldo' exact component={Saldo}/>
        <Route path='/personal' exact component={Personal}/>
        <Route path='/logout' exact component={Logout}/>
        <Route path='/info' exact component={Info}/>
        
        </Switch>
    </Router></>
  )}
export default App;
