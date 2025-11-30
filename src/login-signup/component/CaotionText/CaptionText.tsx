import "../../styles/Loginpage.scss";

export default function CaptionText(){

    return(
         <div className='footer-text'>
            <div>
                <span className='top-text'>By signing in to Duolingo, you agree to our 
                    <a href='./#'>Terms </a> 
                        and 
                    <a href='./#'> Privacy Policy</a>  
                </span>
            </div>
            <div className='botton-last-text'>
                <span className='botton-text '>
                    This site is protected by reCAPTCHA Enterprise and the Google           
                    <a href='./#'> Privacy Policy</a>
                        and 
                    <a href='./#'> Terms of Service </a>
                        apply. 
                </span>
                    
            </div>
    </div>
    )
}