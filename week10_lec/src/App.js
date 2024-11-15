import logo from './logo.svg';
import './App.css';
import Student from "./components/student.component"
import Employee from "./components/employee.component"
import Login from "./components/login.formik"

function App() {
  return (
    <div className="App">
      <h1>React form and events</h1>
      <Student />
      <hr />
      <Student />
      <hr />
      <Login />
    </div>
  );
}

export default App;
