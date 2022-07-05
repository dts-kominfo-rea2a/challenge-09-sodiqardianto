import './App.css';
import React from 'react';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Header from './components/Header';
import Contact from './components/Contact';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      {contacts.map((data, index) => (
        <Contact key={index} data={data} />
      ))}
    </div>
  );
}

export default App;
