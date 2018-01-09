import React, { Component } from 'react';
import './App.css';
import "animate.css/animate.min.css";

import Header from './Header';
import Carousel from './Carousel';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import Footer from './Footer';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      messageStatus: 'unsent'
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  
  toggleModal() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      messageStatus: prevState.messageStatus === "sent" ? "unsent" : prevState.messageStatus
    }));
  }
  
  submitMessage() {
    this.setState(prevState => ({
      messageStatus: 'pending'
    }));
    setTimeout(() => {
      this.setState(prevState => ({
        messageStatus: 'sent'
      }));
    }, 5000);
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel toggle={this.toggleModal}/>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Footer />
        <Modal 
          visible={this.state.showModal} 
          onSubmit={this.submitMessage} 
          toggle={this.toggleModal}
          messageStatus={this.state.messageStatus}
        />
      </div>
    );
  }
}

export default App;
