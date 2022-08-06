import './App.css';
import ClassComponent from './ClassComponent';
import Profile from './Profile';
import Counter from './Counter';
import FunctionalEvent from './FunctionalEvent';
import FunctionalEventClass from './FunctionalEventClass';

function App() {
  return (
    <div className="App">
      <Profile name="Amit" lastname="Dubey" >
        Information of User
      </Profile>
      <ClassComponent message1="Message 1" message2="Message 2" />
      <Counter/>

      <FunctionalEvent />

      <FunctionalEventClass />
    </div>
  );
}

export default App;
