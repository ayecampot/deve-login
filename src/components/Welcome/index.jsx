import paisaje from '../../images/image.png';
const Welcome = () => {
    return (
        <div class="grid">
        <section class="img-section">
          <img src={paisaje} alt="" />
        </section>
        <section class="welcome">
          <div>
              <h1 class="h2 m-mobile">Welcome back!</h1>
              <h2 class="h2">user@mail.com</h2>
          </div>
          <div>
              <button class="btn btn-dashboard">Dashboard</button>
          </div>
             
        </section>
       
   
      </div>
    );
  };
  
  export default Welcome;
  