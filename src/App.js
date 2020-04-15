import React, {Component} from 'react'
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom: 'Antho',
    age:27
  },
  membre2: {
    nom: 'Ségolène',
    age:27
  },
  membre3: {
    nom: 'Eléanor',
    age:0
  },
  membre4: {
    nom: 'Mocha',
    age:2
  }
}

class App extends Component {
  state = {
    famille
  }
  handleClick = (num) => {
    const famille = { ... this.state.famille }
    famille.membre1.age += num
    this.setState({famille})
    }
    handleChange = event => {
      const famille = { ... this.state.famille }
      const nom = event.target.value
      famille.membre1.nom = nom
      this.setState({famille})
      }
  render () {
    const {titre, auteur} = this.props
    const {famille} = this.state
      return (
          <div classNam='App'>
              <h1>{titre}</h1>
              <h2>{auteur}</h2>
              <input value={famille.membre1.nom} type="text" onChange={this.handleChange} />
              <Membre 
                age={famille.membre1.age}
                nom={famille.membre1.nom} />
              <Membre 
                age={famille.membre2.age}
                nom={famille.membre2.nom} />
              <Membre 
                age={famille.membre3.age}
                nom={famille.membre3.nom} />
              <Membre 
                age={famille.membre4.age}
                nom={famille.membre4.nom} />

              <Button
                vieillir={() => this.handleClick(2)}
                />
          </div>
      )
  }
}


export default App;
