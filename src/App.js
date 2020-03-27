import React, {Component} from 'react'
import './App.css'
import Membre from './components/Membre'

class App extends Component {
  render () {
    const {titre, auteur} = this.props
      return (
          <div classNam='App'>
              <h1>{titre}</h1>
              <h2>{auteur}</h2>
              <Membre nom='Antho' />
              <Membre nom='Mocha'>
                  <strong>Je suis un chien</strong>
              </Membre>
          </div>
      )
  }
}


export default App;
