import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="back-container"></div>

      <h3 className="title-con">WE'RE LAUNCHING SOON</h3>

      <img
        className="mountains"
        src="/images/pattern-hills.svg"
        alt="mountainsImg"
      />
      <div className="countdown-timer">
        <div className="days-cont">
          <div className="ball"></div>
          <h1 className="day">08</h1>
          <div className="line"></div>
          <div className="ball2"></div>
          <p>Days</p>
        </div>
        <div className="hours-cont">
          <div className="ball3"></div>
          <h1 className="hour">23</h1>
          <div className="line2"></div>
          <div className="ball4"></div>
          <p>HOURS</p>
        </div>
        <div className="minutes-cont">
          <div className="ball5"></div>
          <h1 className="minute">55</h1>
          <div className="line3"></div>
          <div className="ball6"></div>
          <p>MINUTES</p>
        </div>
        <div className="seconds-cont">
          <div className="ball7"></div>
          <h1 className="second">41</h1>
          <div className="line4"></div>
          <div className="ball8"></div>
          <p>SECONDS</p>
        </div>
      </div>
      <div className="footer-link">
        <a href="">
          {" "}
          <img
            src="/images/icon-facebook.svg"
            alt="facebook-icon"
            className="facebook"
          />
        </a>
        <a href="">
          <img
            src="/images/icon-pinterest.svg"
            alt="pinterest-icon"
            className="pininterest"
          />
        </a>
        <a href="">
          <img
            src="/images/icon-instagram.svg"
            alt="insta-icon"
            className="insta"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
