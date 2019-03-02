import React, { Component } from 'react';
import './App.scss';
import TypeAhead from './SelectComponent'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      appWidth : window.innerWidth
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize, false)
  }


  componentWillUmount(){
    window.removeEventListener('resize', this.handleResize, false)
  }

  handleResize = () => {
    this.setState({appWidth: window.innerWidth})
  }

  renderSourceInput = () => {
    return (
      <div className="search-option">
        <p className="label">From:</p>
        <TypeAhead placeholder="Search for source" />
      </div>
    )
  }

  renderDestinationInput = () => {
    return (
      <div className="search-option">
        <p className="label">To:</p>
        <TypeAhead placeholder="Search for Destination" />
      </div>
    )
  }

  renderContent = () => {
    return (
      <div className="greeting">
        <p> Hello!</p>
      </div>
    );
  }

  render() {
    const HEADER_HEIGHT = 50,
      MARGIN_TOP = 16,
      MARGIN_BOTTOM = 16,
      MOBILE_MAX_WIDTH = 768,
      SEARCH_WIDGET_HEIGHT = 190

      const styles ={ minHeight: window.innerHeight - HEADER_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM - (this.state.appWidth <= MOBILE_MAX_WIDTH ? SEARCH_WIDGET_HEIGHT  : 0)}

    return (
      <div className="App">

        <div className="nav header">
          <a className="navbar-brand" href="/">Sample Search App</a>
        </div>

        <div className="app-container">

          <div className="side-container">
            <div className="search-widget">
              {this.renderSourceInput()}
              {this.renderDestinationInput()}
            </div>
          </div>

          <div className="main-container" style={styles}>
              {this.renderContent()}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
