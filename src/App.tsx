import BodyComp from './layout/body/BodyComp';
import HeaderComp from './layout/header/HeaderComp';
import './App.css';

function App() {
  return (
    <div className="container">
      <HeaderComp />
      <BodyComp />
    </div>
  );
}

export default App;
