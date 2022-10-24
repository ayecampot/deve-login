import google from '../../images/google.svg';
import paisaje from '../../images/image.png';
const Login = () => {
  return (
    <div class="grid">
      <section class="img-section">
        <img src={paisaje} alt="" />
      </section>
      <section class="login">
        <div class="login-form">
          <form method="get">
            <p>Welcome back</p>
            <h1 class="h1">Login to your account</h1>
            <div>
              <p class="input-name mt-input">Email</p>
              <label class="label-email">
                <input
                  id="email"
                  type="email"
                  class="text"
                  name="email"
                  placeholder="Email"
                  tabindex="1"
                  required
                />
              </label>
              <p class="input-invalid mt">*Mail inválido</p>

              <p class="input-name mt">Password</p>
              <label class="label-password">
                <input
                  type="password"
                  class="text"
                  name="password"
                  placeholder="Password"
                  tabindex="2"
                  required
                />
              </label>

              <div class="pass-flex">
                <div class="radio-text">
                  <input class="radio" type="radio" value="bio" />
                  <label class="input-p" for="bio">
                    Remember me
                  </label>
                </div>
                <a class="input-a">Forgot password?</a>
              </div>
            </div>

            <button
              onclick="location.href='../Welcome/index.jsx' "
              class="btn btn-login">
              Login Now
            </button>
            <button type="button" class="btn btn-google">
              <div class="flex-google">
              <img class="google-svg" src={google} alt="" />
                <span class="ml-1"> Log in with Google</span>
              </div>
            </button>
          </form>
        </div>
        <p class="count input-p-2">
          Don´t have an account?{" "}
          <a class="input-a-2" href="">
            Join free today
          </a>
        </p>
      </section>
    </div>
  );
};

export default Login;
