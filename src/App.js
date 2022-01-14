import React, { Component } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import DevHistory from './DevHistory';
import SecretMessage from './SecretMessage';
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }

  gotoDevHistory = () => {
    this.setState({route: 'dev-history'})
  }

  gotoHome = () => {
    this.setState({route: 'home'})
  }

  gotoSecretMessage = () => {
    this.setState({route: 'secret-message'})
  }

  render() {
    const { route } = this.state;
    if (route === 'home') {
      return (
        <>
          <Navbar 
          gotoDevHistory={this.gotoDevHistory}
          gotoHome={this.gotoHome}
          gotoSecretMessage={this.gotoSecretMessage}
          />
          <HeroSection />
        </>
      )
    } else if (route === 'dev-history') {
      return (
        <>
          <Navbar 
          gotoDevHistory={this.gotoDevHistory}
          gotoHome={this.gotoHome}
          gotoSecretMessage={this.gotoSecretMessage}
          />
          <DevHistory />
        </>
      )
    } else if (route === 'secret-message') {
      return (
        <>
          <Navbar 
          gotoDevHistory={this.gotoDevHistory}
          gotoHome={this.gotoHome}
          gotoSecretMessage={this.gotoSecretMessage}
          />
          <SecretMessage />
        </>
      )
    }
  }
}

export default App;
