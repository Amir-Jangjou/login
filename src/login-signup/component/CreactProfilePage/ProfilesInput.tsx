import "../../styles/InputBox.scss"
import clearIcon from '../../image/close2.svg'
import Visibility from "../../image/visibility.svg";
import VisibilityOff from "../../image/visibility_off.svg"
import { useState } from "react";
export default function ProfileInput(){

    const[show, setshow]= useState(false)
    const[value, setValue] = useState<string>("")
    const[parentEmail, setParentEmail] = useState<string>("")

    const handleClear= ():void=>{
        setValue("")
    }

    return(
        <div className="input-container">
            <div className="input-wrapper">

                <div className="input-wrapper">
                    <input type="text" 
                    placeholder='Username(don’t use your real name)'
                    className="input-box"
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
                        setValue(e.target.value)
                    }}
                     />{value&&
                    <img src={clearIcon} 
                    alt="clearicon" 
                    className="clear-icon-name"
                    onClick={()=> setValue("")}/>}
                    
                </div>

                <div className="input-wrapper">
                    <input type="text" 
                    placeholder='Parent’s email'
                    className="input-box"
                    value={parentEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                        setParentEmail(e.target.value)
                    }} 
                    />{parentEmail &&
                    <img src={clearIcon} 
                    alt="clearicon" 
                    className="clear-icon-parent"
                    onClick={handleClear} />
                    }
                    
                </div>

                <div className="input-wrapper">
                    <input type={show ? "text" : "password" } 
                    placeholder='Password'
                    className="input-box" />
                    <div onClick={()=>{setshow(!show)}}>
                        <img src={show? VisibilityOff  :  Visibility } alt="" className=" clear-icon-password" />                       
                    </div>
                </div>

            </div>
        </div>
    )
}