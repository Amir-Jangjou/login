import "../../styles/AccountBtn.scss"
import googleIcon from '../../image/google.svg'
import facebookIcon from '../../image/facebook.svg' 
export default function AccountBtn(){

    return(
        <div className='account'>
            <button className='accountbtn'>
                <img src={googleIcon} alt=""/><span>GOOGLE</span>
            </button>
            <button className='accountbtn'> 
                <img src={facebookIcon} alt=""/><span>FACSBOOK</span>
            </button>
        </div>
    )
}
