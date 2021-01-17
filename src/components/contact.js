import React,{ Component } from 'react';
import './contact.css';
import PropTypes from 'prop-types';

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
            online: false,
          };
      }

    render(){
        return(
            <div className="Contact">
                <img alt="avatar" className="avatar" src={this.props.contact.avatar}/>
                <div>
                    <h3 className="name">{this.props.contact.name}</h3>
                    <div className="status"> 
                        <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                            <p className="status-text"
                                onClick={event => {
                                const newOnline = !this.state.online;
                                this.setState({ online: newOnline });
                                 }}
                            >
                                {this.state.online ? 'Online' : 'Offline'}
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = { 
    contact:PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        online: PropTypes.bool.isRequired,
    })
  };
  
export default Contact;