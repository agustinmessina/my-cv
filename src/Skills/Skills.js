import React from 'react';
import './Skills.css';

import csharp from './csharp.png';
import angular from './angular.jpg';
import reactLogo from './react.png';
import node from './node.jpg';
import java from './java.jpg';
import aws from './aws.jpg';
import mssql from './mssql.png';
import git from './git.png';
import agileScrum from './agile-scrum.png';

function Skill({icon, children}) {
  return (
    <div className="skill">
      <img src={icon} width="40px" />
      <div>
        {children}
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div>
      <h2>Skills</h2>
      <Skill icon={csharp}>
        C# is my major skill. In my current job i’ve been designing and developing a financial API in .NET Core from
        scratch. It’s deployed in AWS and communicates with other APIs through RESTfull HTTP requests to get information
        and process it. Also, I work with EntityFramework Core for database operations.
      </Skill>
      <Skill icon={angular}>
        In my former job I worked as a frontend developer with Angular 7. It was a web application for a bank. The users
        log in and register loans of their customers. The application communicated with a backend in Java.
      </Skill>
      <Skill icon={reactLogo}>
        This website is made with React.js using React Hooks.
        <br />
        I made a game with a library (p5.js) in javascript and react for the menus. You can check it out 
        <span> </span><a href="https://twin-cars.herokuapp.com/">here</a>, it’s deployed in Heroku.
      </Skill>
      <Skill icon={node}>
        Created a server using express.js and some simple scripts.
        <br />
        I made a script for a performance test of a c# API. It makes several parallel calls to the API’s endpoint and
        returns the average time of those calls.
      </Skill>
      <Skill icon={java}>
        I made a desktop application using JavaFx and JasperReports. It is a transportation managment system for a summer
        camp. It reads programatticaly the kids inscription files in excel, stores the data in a database and generates
        reports.
      </Skill>
      <Skill icon={aws}>
        In my current job, we deploy our API to a lambda using aws serverless framework.
        <br />
        This website is deployed in aws using aws amplify console.
      </Skill>
      <Skill icon={mssql}>
        Made some queries using MS Sql Server Management Studio. Used the profiler tool to test performance.
      </Skill>
      <Skill icon={git}>
        Extensive use of git for version control. Pull requests for every feature, with code review.
      </Skill>
      <Skill icon={agileScrum}>
        I’ve been working with scrum and agile methodology for almost two years. At work we use Azure DevOps (TFS) to keep
        track of the user stories and tasks.
      </Skill>
    </div>
  );
}

export default SkillsSection;