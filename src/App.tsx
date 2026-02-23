import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Home } from '@/pages/Home';
import { Read } from '@/pages/Read';
import { About } from '@/pages/About';
import { Pause } from '@/pages/Pause';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/read" element={<Read />} />
            <Route path="/about" element={<About />} />
            <Route path="/pause" element={<Pause />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
