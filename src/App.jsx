import Day from './components/Day';
import DayList from './components/DayList';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';
import CreateDay from './components/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={ <DayList /> } />
          <Route path="/day/:day" element={ <Day /> } />
          <Route path="/create_word" element={ <CreateWord />} />
          <Route path="/create_day" element={ <CreateDay />} />
          <Route path="*" element={ <EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
