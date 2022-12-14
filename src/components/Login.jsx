import google from '../images/google.svg';
import React, { useState } from "react";
 
 
const Login = ({ setUsr }) => {
  const [invalid, setInvalid] = useState(false);
  const [email, setEmail] = useState();
 
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
 
  const writeEmail = (e) => {
    const email = e.target.value
    if (!email) {
      setInvalid(false)
    }
    setEmail(email)
  }

  const submit = (e) => {
    e.preventDefault();
    if (e.key && e.key !== "Enter") return;

    if (isValidEmail(email)) {
      setUsr(email)
    } else {
      setInvalid(true)
    }
  }
  return (
    <section class="login">
      <div class="login-form">
        <form onSubmit={submit}>
          <p>Welcome back</p>
          <h1 class="h1">Login to your account</h1>
          <div>
            <p class="input-name mt-input">Email</p>
            <label class="label-email">
              <input
                id="email"
                class="text"
                name="email"
                placeholder="Email"
                tabindex="1"
                required
                value={email}
                onChange={writeEmail}
              />
            </label>
 
            {invalid && (<p className="input-invalid mt">*Mail inválido</p>)}
 
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
              <a class="input-a" href="#">Forgot password?</a>
            </div>
          </div>
 
          <button
            type="submit"
            class="btn btn-login">
            Login now
          </button>
          <button type="button" class="btn btn-google">
            <div class="flex-google">
              <img class="google-svg" src={google} alt="logo de google en el boton" />
              <span class="ml-1"> Or sign-in with Google</span>
            </div>
          </button>
        </form>
      </div>
      <p class="count input-p-2">
        Don't have an account?{" "}
        <a class="input-a-2" href="">
          Join free today
        </a>
      </p>
    </section>
  )
}
 
export default Login;