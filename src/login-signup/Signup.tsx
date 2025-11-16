import closeIcon from './image/close.svg'
import AgeSignInput from './AgeSignInput'
import CaptionText from './CaptionText'
import SwitchBtn from './component/SwitchBtn/SwitchBtn'
// import SignupRsponseBtn from './SignupResponse'

export default function Signup(){
    return(
        <div className='container'>

            <header>
                <section className='closeIcon'>
                <img src={closeIcon} alt="close"/>
                </section> 
                
                {/* <SignupRsponseBtn/> */}
                <SwitchBtn/>
            </header>

            <div className="form-wrapper">
                <form>
                    <h1>How old are you?</h1>
                    <AgeSignInput/>   
                </form>
                <CaptionText/>
            </div>

        </div>
    )
}