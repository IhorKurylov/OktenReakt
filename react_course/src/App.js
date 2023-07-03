import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent/UserComponent.jsx';

const firstDiv = <div>HEllo world</div>

const App = () => {
  console.log('console');
  return (
    <>
      <div>
        HEllo world
      </div>
      <UserComponent
        name={'Ihor'}
        nickname={'dev'}
        email={'dcsd@sdvsd'}
        element={firstDiv}
      />
      <UserComponent
        name={'ne Ihor'}
        nickname={'ne dev'}
        email={'nema'}
        element={firstDiv}
      />
    </>
  );
};

export default App;
