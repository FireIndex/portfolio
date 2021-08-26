import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import Menu from './Pages/Compo/Menu'
import Home from './Pages/Home'
import Service from './Pages/Service'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Error from './Pages/Error'

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/Service' component={Service}></Route>
        <Route exact path='/About' component={About}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  )
}
export default App
