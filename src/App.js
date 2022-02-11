import React, { Component } from 'react'
// import FirstComponent, { SecondComponent } from './components/learning-examples/FirstComponent'
// import ThirdComponent, { ForthComponent } from './components/learning-examples/ThirdComponent'
// import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import TodoApp from './components/todo/TodoApp';
// import Counter from './components/Counter/Counter';



class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
        
      </div>
    );
  }
}



// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         My Hello World
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//         <ForthComponent></ForthComponent>
//       </div>
//     );
//   }
// }


export default App
