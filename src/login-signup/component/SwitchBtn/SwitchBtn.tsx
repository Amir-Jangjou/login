import { useLocation, useNavigate } from "react-router-dom";

export default function SwitchBtn (){
    const navigate = useNavigate();
    const location = useLocation();

    const handelCheck = ()=>{
        if(location.pathname === '/')navigate('/Signuppage');
        else navigate('/')
    }

    return(
        <button onClick={handelCheck} >
            {location.pathname ==='/'? 'SIGNUP' : 'LOGIN' }
        </button>
    )
}