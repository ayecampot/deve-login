import './App.css';
import Login from './components/Login';
import Welcome from './components/Welcome';
import React, { useState } from "react";
import paisaje from './images/image2.png';
 
const App = () => {
  const [usr, setUsr] = useState();

  return (
    <div className="App">
      <main>
        <div class="grid">
          <section class="img-section">
            <img src={paisaje} alt="paisaje de montañas" />
          </section>
          {usr ? <Welcome usr={usr} /> : <Login setUsr={setUsr} />}
        </div>
      </main>
    </div>
  );
};
 
export default App;