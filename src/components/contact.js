import React,{ Component } from 'react';
import './contact.css';

class Contact extends Component{
    render(){
        return(
            <div className="Contact">
                <img className="avatar" src='https://randomuser.me/api/portraits/men/21.jpg'/>
                <div>
                    <h2 className="name">Justin Carroll</h2>
                    <div className="status">
                        <div className="status-online"></div>
                        <p className="status-text">Online</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;