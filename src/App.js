import logo from './logo.svg';
import './App.css';
//import Greetingf from './components/pure/Greetingf';
//import TaskListComponent from './components/container/task_list';
import ComponentA from './components/container/componentA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de ejemplo funcional */}
        {/* <Greetingf name="Martín"></Greetingf> */}
        {/* Componente de Listado de Tareas */}
        {/*<TaskListComponent></TaskListComponent>*/}
        <ComponentA></ComponentA>

      </header>
    </div>
  );
}

export default App;