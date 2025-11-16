
import '../LoginBtn/LoginBtn.scss';

interface props{
    onClick: ()=> void
}

export default function LoginBtn({onClick}:props){
    return(<button>LOGIN</button>)
}