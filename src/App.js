import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <div className='App'>
      <div>
        <Header />
        <ImageGrid />
      </div>
    </div>
  );
}

export default App;
