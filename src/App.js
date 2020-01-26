import React from 'react';
import './App.css';
import Header from './Header/Header';
import Skills from './Skills/Skills';

function Section({title, children}) {
  return (
    <div>
      <h2 className="section-title">
        {title}
      </h2>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Section title="Professional summary">
          <p className="intermediate-font">
            I'm a full-stack software developer, currently working on backend in a .NET Core web api. Constantly learning 
            about new technologies and better ways to solve problems, code readability and performance are my priorities. 
            I practice Test Driven Development, read a few books and a lot of articles about it. I work well with people 
            and support my teammates whenever I can. Love to face new challenges and solve complex problems.
          </p>
        </Section>
        <Section title="Skills">
          <Skills />
        </Section>
        <Section title="Experience">
          <ul className="big-font">
            <li>
              02/19 - present: backend developer at <a href="https://www.accenture.com/">Accenture</a>
            </li>
            <li>
              08/18 - 02/19: frontend developer at <a href="http://www.eiva.com.ar/">EIV Software</a>
            </li>
          </ul>
        </Section>
        <Section title="Education">
          <ul className="big-font">
            <li>
              Completed 3 years in the accountant career at the university <a href="https://www.fcecon.unr.edu.ar/web/">Facultad de Ciencias Economicas de Rosario</a> with a 
              title “Bachillerato Universitario
            </li>
            <li>
              Cambridge <a href="https://www.cambridgeenglish.org/exams-and-tests/first/">First Certificate Exam</a>
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default App;