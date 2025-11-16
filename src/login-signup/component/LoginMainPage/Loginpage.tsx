
import './Loginpage.scss';
import InputBox from '../../component/InputBox/inputBox.js';
import '../../styles/InputBox.scss'
import AccountBtn from '../AccontBtn/accontBtn.js';
import closeIcon from '../../image/close.svg'
import CaptionText from '../../CaptionText.js';
import {loginUser} from '../../API/auth.js'
import { useState } from 'react';
import SwitchBtn from '../SwitchBtn/SwitchBtn.js';


export default function  Loginpage(){

    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')   
    
    const handleLogin = async(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        try{
            const res = await loginUser({username, phone: password});
            console.log('Responsive: ' , res);
            localStorage.setItem('token: ', res.data) 
        }catch (err) {
        console.error('Login failed:', err);
    }
    }
    
    return(
        <div className='container'>

            <header>
               <section className='closeIcon'>
                <img src={closeIcon} alt="close"/>
                </section> 
                
                <SwitchBtn/>
            </header>

            
            <div className="form-wrapper">
                <form>
                    <h1 >Login</h1>

                        <InputBox
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setpassword={setpassword}
                        />
                        
                        {/* <LoginBtn onClick={handleLogin}/> */}
                        <button  onClick={handleLogin}>asdf</button>
                        
                    <div className="or-separator">
                        <div className="line"></div>
                        <span>OR</span>
                        <div className="line">  </div>
                    </div>

                    <AccountBtn/>
                    
                </form>

                   <CaptionText/>

            </div>
        </div>
    );
}
