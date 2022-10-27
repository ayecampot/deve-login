import './App.css';
import Login from './components/Login';
import Welcome from './components/Welcome';
import React, { useState } from "react";
import paisaje from './images/image.png';
 
const App = () => {
  const [usr, setUsr] = useState();

  return (
    <div className="App">
      <main>
        <div class="grid">
          <section class="img-section">
           <div class="img-container">
            <img src={paisaje} alt="paisaje de montañas" />
            </div>
          </section>
          {usr ? <Welcome usr={usr} /> : <Login setUsr={setUsr} />}
        </div>
      </main>
    </div>
  );
};
 
export default App;