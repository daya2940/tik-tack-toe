import React, { useState } from "react";
import Welcome from "./welcome";

const Selection = () => {
  const [friend, setFriend] = useState("Alex");
  const [AI, setAI] = useState("");
  const [show, setShow] = useState(true);
  const handleFriend = (e) => {
    let val = window.prompt("enter the name of friend");
    if (val) {
      setFriend(val);
      setAI("Alex");
      setShow(false);
    }
  };
  const handleAI = (e) => {
    setAI(e.target.textContent);
    setFriend(friend);
    setShow(false);
  };

  return (
    <div>
      {show && (
        <div>
          <p style={{display:'flex',justifyContent:'center'}}>Choose Your play mode</p>
          <div>
            <p style={{display:'flex',justifyContent:'center'}}>
              <span className="X">X</span>
              <span className="O ml-5">O</span>
            </p>
          </div>
          <p></p>
          <div>
            <button
              className="btn btn-lg btn-primary welcome-button"
              onClick={handleAI}
              style={{ borderRadius: "50px" }}
            >
             With AI
            </button>
          </div>
          <div>
            <button
              className="btn btn-lg btn-danger welcome-button mt-4"
              onClick={handleFriend}
              style={{ borderRadius: "50px" }}
            >
              With Friend
            </button>
          </div>
        </div>
      )}
      <div>
        {!show  && <Welcome AI={AI} friend={friend} />}
      </div>
    </div>
  );
};

export default Selection;
