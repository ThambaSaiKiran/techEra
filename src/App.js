import {Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import ItemDetails from './Components/ItemDetails'
import NotFound from './Components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={ItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
