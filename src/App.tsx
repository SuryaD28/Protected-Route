import './App.css';
import MainRoutes from './Routes';
import Sidebar from './components/Sidebar';
import './style.css';

function App() {
  return (
    <div className="App">

      <Sidebar />
      <MainRoutes /> 
    </div>
  );
}

export default App;
