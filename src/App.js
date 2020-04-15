import React, {Component} from 'react'
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'

import {sampleText} from './sampleText'
import marked from 'marked'

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
    famille, 
    text: sampleText
  }

  componentDidMount() {
    const { text }  = localStorage.getItem('text')
    if (text) {
      this.setState({text})
    } else {
      this.setState({text : sampleText})
    }
    
  }
  componentDidUpdate() {
    const { text }  = this.state
    localStorage.setItem('text', text)
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
    handleChangedeux = event => {
        const text = event.target.value
        this.setState({text})
        }
    renderText = text => {
      const __html = marked(text, {sanitize:true})
      return { __html}
    }

  render () {
    const {titre, auteur} = this.props
    const {famille} = this.state
      return (
          <div className='App'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-6'>
                  <textarea 
                    onChange={this.handleChangedeux} 
                    value={this.state.text} 
                    className='form-control' rows='35'></textarea>
                </div>
                <div className='col-sm-6'>
                <h1>Résultats</h1>
                <div 
                  dangerouslySetInnerHTML={this.renderText(this.state.text)} 
                >
                </div>
                { sampleText }
                </div>
              </div>
            </div>
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
