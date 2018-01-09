import React, {Component} from 'react';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
  
  resetState() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  }
  
  render() {
    const {message, phone, email, name} = this.state;
    const {onSubmit, toggle, visible, messageStatus} = this.props;
    
    console.log(messageStatus);
    
    return (
      <div 
        style={visible ? {display: "block"} : {display: "none"}}
        className='modal'
        onClick={(e) => {
          if(e.target.className === "modal") {
            toggle();
            this.resetState();
          }
        }}
      >
        <div className='modal-inner'>
          <p className='modal-form-title'>{(messageStatus === "sent") ? "Message Sent!" : "LOREM IPSUM"}</p>
          <form 
            style={(messageStatus !== "sent") ? {display: "block"} : {display: "none"}}
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(message);
              this.resetState();
            }}
            className="modal-form"
          >
            <span className='modal-title'>Your Name</span>
            <input
              className="modal-name"
              type="text"
              required
              name="name"
              value={name}
              onChange={(e) => this.setState({name: e.target.value})}
            />
            <div className='modal-row'>
              <div className='modal-email'>
                <span className='modal-title'>Your Email</span>
                <input 
                  type="email" 
                  name="email" 
                  required
                  value={email}
                  onChange={(e) => this.setState({email: e.target.value})}
                />
              </div>
              
              <div className='modal-phone'>
                <span className='modal-title'>Phone Number</span>
                <input 
                  type="tel" 
                  required
                  name="phone" 
                  value={phone}
                  onChange={(e) => this.setState({phone: e.target.value})}
                />
              </div>
            </div>
            
            <span className='modal-title'>Message</span>
            <textarea
              className="modal-message"
              required
              rows="10"
              value={message}
              onChange={(e) => this.setState({message: e.target.value})}
            >
            </textarea>
            <div className='modal-button'>
              <button
                type="submit"
                style={{marginTop: '10px'}}
                className="modal-button app-button"
              >
                Button
              </button>
            </div>
            <div 
              style={(messageStatus === 'pending') ? {display: "flex"} : {display: "none"}}
              className="modal-form-pending"
            >
              <div className="modal-pending-content">
                <p className="modal-pending-message">Sending Message</p>
                <div className="modal-pending-object"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
};

export default Modal;