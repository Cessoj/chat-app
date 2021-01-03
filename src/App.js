import Contact from './components/contact.js';
import React from 'react'; 


let av1 = {
 name: 'Justin Carroll',
 avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
 online: true,
}

let av2 = {
  name: 'Lester Jackson',
  avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
  online: false,
 }

let av3 = {
  name: 'Grace Stevens',
  avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
  online: true,
 }
 
function App() {
  return (
    <div className="App">
      <Contact contact={av1}/>
      <Contact contact={av2}/>
      <Contact contact={av3}/>
    </div>
  );
}

export default App;
