import SwitchBtn from "../SwitchBtn/SwitchBtn.js";
import backIcon from "../../image/arrow_back.svg";
import ProfileInput from "./ProfilesInput.js";
import CreateAccontBtn from "./createAccontBtn.js";
import AccountBtn from "../AccontBtn/accontBtn.js";
import CaptionText from "../CaotionText/CaptionText.js";
import "../../styles/InputBox.scss"

export default function CreateProfilePage(){



    return(<>
    
        <div className="container">
            <header>
                <section className='closeIcon'>
                <img src={backIcon} alt="close"/>
                </section>
                <SwitchBtn/>
            </header>

            <div className="form-wrapper">
                <form>
                    <h1>Create your profile</h1>

                    <ProfileInput />
                    <CreateAccontBtn />
                    <AccountBtn />
                </form>
                <CaptionText />
            </div>

        </div>
    
    </>)
}