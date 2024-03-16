// import CRUD from './CRUD';
import './App.css';
import Custhome from './customer/Custhome';
import CustomerHome from './pages/CustomerHome';
import Registration from './components/Registration';
import CRUD from './CRUD';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <Custhome /> */}
      <CustomerHome/>
    </div>
  );
}

export default App;
