import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
import { ComicsPage, MainPage, SingleComicPage, Page404 } from '../pages';

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/comics" element={<ComicsPage />} />
            <Route exact path="/comics/:comicId" element={<SingleComicPage />} />
            <Route exact path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
