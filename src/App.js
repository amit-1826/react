import './App.css';
import ClassComponent from './ClassComponent';
import Profile from './Profile';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Profile name="Amit" lastname="Dubey" >
        Information of User
      </Profile>
      <ClassComponent message="Message from props" />

      <Counter/>
    </div>
  );
}

export default App;
