
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom'; 
import { AppRouter } from './routes/AppRouter';
import { Container } from './components/common/container/container';
function App() {
  return (
    <div className="App">
      <Container>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter> 

      </Container>
    </div>
  );
}

export default App;