import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        {/* Other sections can go here */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
