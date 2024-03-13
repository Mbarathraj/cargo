import CRUD from './CRUD';
import './App.css';
import { LoginRegister } from './Routes/LoginRoute';
function App() {
  return (
    <div className="App">
      <LoginRegister />
      { <CRUD /> }
    </div>
  );
}

export default App;
