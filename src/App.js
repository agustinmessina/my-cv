import React from 'react';
import './App.css';
import Header from './Header/Header';
import SkillsSection from './Skills/Skills';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <h2>Professional summary</h2>
        <p>I'm a full-stack software developer, currently working on backend in a .NET Core web api. Constantly learning 
          about new technologies and better ways to solve problems, code readability and performance are my priorities. 
          I practice Test Driven Development, read a few books and a lot of articles about it. I work well with people 
          and support my teammates whenever I can. Love to face new challenges and solve complex problems.
        </p>
        <SkillsSection />
      </div>
    </div>
  );
}

export default App;
