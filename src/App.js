import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';
import WebsiteDetails from './pages/WebsiteDetails';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<WebsiteDetails />} />
          <Route path="/blog/post" element={<BlogPost />} />
          <Route path="*" element={<Page />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
