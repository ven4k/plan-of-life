import { MainPage } from './components/pages/MainPage';
import './App.scss';


// Все png изображения макета, лютый пиксельный киш-миш, поэтому везде используются svg
const App = () => {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
