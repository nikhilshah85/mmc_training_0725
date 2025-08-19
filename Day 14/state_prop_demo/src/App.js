import { Component } from 'react';
import Traininginfo from './traininginfo';

class App extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      appName:'Learning React',
      appVersion:'1.0.0',
      trainer:'Nikhil',
      students:'8',
      mode:'Online',
      topics:['MEAN','MERN','Azure','AWS','Oracle','SQLServer','NoSQL'],
      greet()
      {
        alert('Hello ' + this.state.trainer);
      },
      totalStudents()
      {
        alert(this.state.students);
      },
      myNameIs(name)
      {
        alert('My name is ' + name);
      }
    };

    this.state.greet = this.state.greet.bind(this);
    this.state.totalStudents = this.state.totalStudents.bind(this);

  }
  render()
  {
    return (
      <div>
            <button onClick={this.state.greet}>Greet</button>
            <button onClick={this.state.totalStudents}>Total Students</button>
            <button onClick={this.state.myNameIs.bind(this,'Nikhil')}>Name</button>

        {/* <h1>Welcome to class based Component</h1>
        <h2>{this.state.appName}</h2>
        <h2>{this.state.appVersion}</h2>
        <h2>{this.state.trainer}</h2>
        <h2>{this.state.students}</h2>
        <h2>{this.state.mode}</h2>      */}

    <Traininginfo trainerName={this.state.trainer}
                  modeOfTraining={this.state.mode}
                  greetings={this.state.greet} />

      
       
      </div>
    );
  }
}

export default App;