import "./LogIn.css";
import ballons from "../../assets/ballons.png";
import inImg from "../../assets/in.png";
const LogIn = () => {
  return (
    <section className="main-logIn-container">
      <div className="left-container">
        <img src={ballons} alt="" />
      </div>

      <div className="right-container">
        <h1>Log in</h1>
        <div className="inputs-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="email"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <button className="log-in-btn">Log in</button>
        <p className="or">or</p>
        <button className="linked-in-btn">
          <img src={inImg} alt="" /> Continue with LinkedIn
        </button>

        <p className="cant-log-in">Can’t log in? ∙ Sign up for an account</p>
      </div>
    </section>
  );
};

export default LogIn;
