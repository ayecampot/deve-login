const Welcome = ({usr}) => {
    return (
        <section class="welcome">
          <div>
              <h1 class="h2 m-mobile">Welcome back!</h1>
              <h2 class="h2">{usr}</h2>
          </div>
          <div>
              <button class="btn btn-dashboard">Dashboard</button>
          </div>
        </section>
    );
  };
   
  export default Welcome;