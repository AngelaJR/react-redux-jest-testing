import React from 'react';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
          <Headline
            header="Posts"
            desc="Click the button to render posts"
          />
      </main>
    </div>
  );
}

export default App;
