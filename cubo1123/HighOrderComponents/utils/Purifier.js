import React from 'react'

export default function Purifier (Component) {
  class Purifiered extends React.PureComponent {
    constructor(props){
      super(props);
      this.state = {
        style: {
          backgroundColor: 'red'
        }
      }
    }
    render () {
      return (<Component {...this.props} {...this.state}/>)
    }
  }
  Purifiered.displayName = Component.displayName || 'PureComponent'
  return Purifiered
}

