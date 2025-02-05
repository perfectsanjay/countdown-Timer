import { useEffect, useState } from "react";
import "./App.css";

const targetDate = new Date('2025-03-01T00:00:00').getTime()  //set the launch date 

function App() {

const CalculateCountDown = () => {
  const now = new Date().getTime()
  const diffrence = targetDate-now;

  if (diffrence<0) return {days:0,hour:0,minute:0,second:0};

  return {
    days: Math.floor(diffrence/(1000*60*60*24)),
    hours: Math.floor(diffrence/(1000*60*60)%24),
    minute: Math.floor(diffrence/(1000*60)%60),
    seconds: Math.floor(diffrence/(1000)%60)
  }
  
  
  }
  const [timeLeft, setTimeLeft] = useState(CalculateCountDown())

 useEffect(() => {
    const timer = setInterval(() =>{
      setTimeLeft(CalculateCountDown())
    }, 1000)
    return () => clearInterval(timer); 
 },[])

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
        {Object.entries(timeLeft).map(([label,value],index) => (
          <div key={index} className={`${label}-cont`}>
            <div className={`ball${index * 2 + 1}`}></div>
            <h1 className={label}>{String(value).padStart(2, "0")}</h1>
            <div className={`line${index+1}`}></div>
            <div className={`ball${index *2 +2}`}></div>
            <p>{label}</p>
          </div>
        ))}
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
