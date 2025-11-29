import '../../styles/LoginBtn.module.scss'
import "../../styles/AgeSubmit.scss";
import "../../styles/InputBox.scss";
import { useState } from "react";
import { Link } from 'react-router-dom';
import AccountBtn from "../AccontBtn/accontBtn.js";
import clearIcon from "../../image/close2.svg";


export default function AgeSignInput() {
  const [value, setValue] = useState(""); 

  const handleClear = () => {
    setValue("");
  };

  const isNumberValid = value.trim() !== "" && !isNaN(Number(value));

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <div className='age_input'>
          <input
            type="text"
            placeholder="Age"
            className="userAgeInput"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          {value && (
            <img
              src={clearIcon}
              alt="clear"
                className="clear-icon"
                onClick={handleClear}
            />
          )}

        </div>
        

        <div className='ageCaption'>
          Providing your age ensures you get the right Duolingo experience. For more details, please visit our
          <a href="#"> Privacy Policy</a>.
        </div>

        <Link to='/create-profile'>
          <button 
            className='AgeSubmit' 
            disabled={!isNumberValid}
          >
            NEXT
          </button>

        </Link>
        
        
      </div>
      
      <AccountBtn/>
    </div>
  );
}
