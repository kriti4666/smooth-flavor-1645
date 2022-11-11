import './App.css';
import AllRoutes from './Components/AllRoutes';
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup';
// import Context from './Components/GlobalContext/Context';

function App() {
  return (
    <div className="App">

      <AllRoutes />
      <Login />
      <Signup />

    </div>
  );
}

export default App;
