import { useState } from "react";
import "./App.css";

function App() {
  document.body.style.backgroundColor = "pink";

  const [showPopup, setShowPopup] = useState(false);
  const [showNoPopup, setNoShowPopup] = useState(false);

  const [showYesButton, setShowYesButton] = useState(true);
  const [showNoButton, setShowNoButton] = useState(true);

  const handleYesClick = () => {
    setShowPopup(true);
    setShowYesButton(false);
    setShowNoButton(false);
    setNoShowPopup(false);
  };

  const handleNoClick = () => {
    setShowNoButton(false);
    setNoShowPopup(true);
  };

  return (
    <div className="homepage">
      <h1 className="header">💐Happy Valentine's Day💝</h1>
      <div className="question">Will you be my valentine?</div>
      <img
        src="https://i.pinimg.com/originals/9a/3c/3f/9a3c3fb5f73822af8514df07f6676392.gif"
        alt="Please"
        width="400"
        height="300"
      />
      <br />
      {showYesButton && (
        <button className="button" onClick={handleYesClick}>
          Yes 💘
        </button>
      )}
      {showNoButton && (
        <button className="button" onClick={handleNoClick}>
          No 💔
        </button>
      )}

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Yay! 💖</h2>
            <p>You're my Valentine now! 🎉</p>
          </div>
        </div>
      )}

      {showNoPopup && <div className="popupNo">You can not choose that!!!</div>}
    </div>
  );
}

export default App;
