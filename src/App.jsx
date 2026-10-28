import { useState } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Students from './Students.jsx';
import Contact from './Contact.jsx';

function App() {
  const [page, setPage] = useState('Home');
  const [count, setCount] = useState(0);

  const schoolName = 'EAV KIVUMU TSS';

  function showPage(selectedPage) {
    setPage(selectedPage);
  }

  return (
    <div>
      <header>
        <h1>{schoolName}</h1>
        <h2>Software Development - Level IV</h2>
        <p>Front-End Application Development with ReactJS</p>
      </header>

      <nav>
        <button onClick={() => showPage('Home')}>Home</button>{' '}
        <button onClick={() => showPage('About')}>About</button>{' '}
        <button onClick={() => showPage('Students')}>Students</button>{' '}
        <button onClick={() => showPage('Contact')}>Contact</button>
      </nav>

      <hr />

      {page === 'Home' && (
        <Home schoolName={schoolName} />
      )}

      {page === 'About' && <About />}

      {page === 'Students' && <Students />}

      {page === 'Contact' && (
        <Contact schoolName={schoolName} goHome={showPage} />
      )}

      <hr />

      <section>
        <h2>Website Visit Counter</h2>
        <p>Button clicks: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </section>

      <footer>
        <p>Software Development Class - 2026</p>
      </footer>
    </div>
  );
}

export default App;