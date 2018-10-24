import React from 'react'
import About from '../About'
import Purifier from "../../../utils/Purifier"
class App extends React.Component {
  render () {
    var AboutPure
    AboutPure = Purifier(About)
    return (
      <div>
      <AboutPure {...this.props} />
      <About/>
      </div>
    )
  }
}

export default App