import "bootstrap-icons/font/bootstrap-icons.css";
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Header from './components/Header';
import Siderbar from "./components/Siderbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Header />
      <Siderbar />
      <Dashboard/>
    </div>
  );
}

export default App;

