import '../../styles/InputBox.scss'
import{ useState, type Dispatch, type SetStateAction } from "react";
import closeIcon from "../../image/close2.svg";


interface props {
  username:string;
  password:string;
  setUsername: Dispatch<SetStateAction<string>>;
  setpassword: Dispatch<SetStateAction<string>>;
}

export default function InputBox({username, password, setUsername, setpassword}:props){

  const [value, setValue] = useState<string>('');
  
  const handleClear =():void=>{
    setValue('')
  }
  
  return(<>
    <div className="input-container">
       <div className="input-wrapper">
        <input type="text" 
          placeholder="Email or username"
          className="userNameInput"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
          setValue(e.target.value)
          setUsername(e.target.value)
          }}
        />{value &&
            <img src={closeIcon} alt=""
            className="clear-icon"
            onClick={handleClear} 
            
            />
            }
       </div>

       <div className="input-wrapper">
          <input type="password" 
          placeholder="password"
          className="passwordInput" 
          onChange={e => setpassword(e.target.value)}
          />
          <a href="#" className="forgrt-link">Forget?</a>
      </div>
    </div>
  
  </>)
}



// export default function InputWithLink() {
//   const navigate = useNavigate();
//   const [value, setValue] = useState(""); 

  // const handleForgetClick = () => {
  //   navigate("./"); 
  // };

//   const handleClear = () => {
//     setValue("");
//   };

//   return (
//     <div className="input-container">
//        <div className="input-wrapper">
//          <input
//            type="text"
//            placeholder="Email or username"
//            className="userNameInput"
//            value={value}
//            onChange={(e) => setValue(e.target.value)}
//          />
//          {value && (
//            <img
//              src={closeIcon}
//              alt="clear"
//              className="clear-icon"
//              onClick={handleClear}
//            />
//          )}
//        </div>

//        <input
//          type="password"
//          placeholder="Password"
//          className="passwordInput"
//        />

//        <a
//          href="./"
//          className="forgrt-link"
//          onClick={(e) => {
//            e.preventDefault();
//            handleForgetClick();
//          }}
//        >
//          FORGET?
//        </a>
//     </div>
//   );
// }

