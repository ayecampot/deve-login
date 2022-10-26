
import './App.css';
import Login from './components/Login';
import Welcome from './components/Welcome';
 
import React, { useState } from "react";
import paisaje from './images/image2.png';
 
const App = () => {
 
  const [usr, setUsr] = useState();
  const [logged, setLogged] = useState(false);
 
  const writeUsr = (e) => setUsr(e.target.value)
 
  const log = (shouldLog) => setLogged(shouldLog)
 
  return (
    <div className="App">
      <main>
        <div class="grid">
          <section class="img-section">
            <img src={paisaje} alt="paisaje de montañas" />
          </section>
          { logged ? <Welcome usr={usr}/> : <Login usr={usr} setUsr={writeUsr} log={log}/> }
        </div>
      </main>
    </div>
  );
};
 
export default App;
