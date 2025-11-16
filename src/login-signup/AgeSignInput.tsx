import './component/LoginBtn/LoginBtn.scss'
import "./AgeSubmit.scss";
import "./styles/InputBox.scss";
import { useState } from "react";
import AccountBtn from "./component/AccontBtn/accontBtn.js";
import closeIcon from "./image/close2.svg";


export default function AgeSignInput() {
  const [value, setValue] = useState(""); 

  const handleClear = () => {
    setValue("");
  };

  const isNumberValid = value.trim() !== "" && !isNaN(Number(value));

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Age"
          className="userAgeInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {value && (
          <img
            src={closeIcon}
            alt="clear"
            className="clear-icon"
            onClick={handleClear}
          />
        )}

        <div className='ageCaption'>
          Providing your age ensures you get the right Duolingo experience. For more details, please visit our
          <a href="#"> Privacy Policy</a>.
        </div>

        <button 
          className='AgeSubmit' 
          disabled={!isNumberValid}
          onClick={() => alert(`Age: ${value}`)}
        >
          NEXT
        </button>
        
      </div>
      <div className="or-separator">
          <div className="line"></div>
          <span>OR</span>
          <div className="line">  </div>
      </div>
      <AccountBtn/>
    </div>
  );
}
